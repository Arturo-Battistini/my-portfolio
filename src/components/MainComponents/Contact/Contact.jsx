import React, { useContext, useState, useEffect } from "react"
import { Contexto } from "../../../Contexto/index"
import { EmailService } from "../../../services/emailService"

// Estilos CSS para autocompletado
const autocompleteStyles = `
  /* Estilos más específicos para autocompletado */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-webkit-autofill:visited {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    -webkit-text-fill-color: white !important;
    background-color: transparent !important;
    background: transparent !important;
    color: white !important;
    transition: background-color 5000s ease-in-out 0s !important;
    width: 100% !important;
  }
  
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active,
  textarea:-webkit-autofill:visited {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    -webkit-text-fill-color: white !important;
    background-color: transparent !important;
    background: transparent !important;
    color: white !important;
    transition: background-color 5000s ease-in-out 0s !important;
    width: 100% !important;
  }
  
  /* Forzar width en todos los inputs */
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100% !important;
    min-width: 100% !important;
  }
`

const Contact = () => {
  const { language } = useContext(Contexto)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [isEmailSentRecently, setIsEmailSentRecently] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    // Inicializar EmailJS
    EmailService.init()
    // Verificar si se envió un email recientemente
    setIsEmailSentRecently(EmailService.isEmailSentRecently())

    // Agregar estilos CSS para autocompletado
    const styleElement = document.createElement("style")
    styleElement.textContent = autocompleteStyles
    document.head.appendChild(styleElement)

    // Cleanup: remover el estilo cuando el componente se desmonte
    return () => {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement)
      }
    }
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = !language
        ? "El nombre es requerido"
        : "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = !language
        ? "El email es requerido"
        : "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = !language
        ? "El email no es válido"
        : "Email is not valid"
    }

    if (!formData.message.trim()) {
      newErrors.message = !language
        ? "El mensaje es requerido"
        : "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }))
    }

    // Forzar color después del autocompletado
    setTimeout(() => {
      e.target.style.webkitTextFillColor = "var(--pText)"
      e.target.style.color = "var(--pText)"
    }, 100)
  }

  const handleInputFocus = (e) => {
    // Forzar color cuando el campo se enfoca
    setTimeout(() => {
      e.target.style.webkitTextFillColor = "var(--pText)"
      e.target.style.color = "var(--pText)"
    }, 50)
  }

  const handleInputBlur = (e) => {
    const { name } = e.target
    // Marcar campo como touched
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }))

    // Validar el campo cuando se pierde el foco
    const fieldErrors = {}
    if (!formData[name]?.trim()) {
      fieldErrors[name] = !language
        ? "Este campo es requerido"
        : "This field is required"
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(formData[name])) {
      fieldErrors[name] = !language
        ? "El email no es válido"
        : "Email is not valid"
    } else {
      // Si el campo es válido, limpiar el error
      fieldErrors[name] = ""
    }

    setErrors((prev) => ({
      ...prev,
      ...fieldErrors
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    if (isSubmitting || isEmailSentRecently) return

    setIsSubmitting(true)

    try {
      const result = await EmailService.sendContactEmail(formData)

      if (result.success) {
        setShowSuccessMessage(true)
        EmailService.setEmailSent()
        setIsEmailSentRecently(true)
        setFormData({ name: "", email: "", message: "" })

        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 5000)
      } else {
        alert(
          !language
            ? "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
            : "There was an error sending the message. Please try again."
        )
      }
    } catch (error) {
      console.error("Error:", error)
      alert(
        !language
          ? "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
          : "There was an error sending the message. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="mb-5 text-pText Contact default-box p-10 gap-5 h-[90vh]"
      data-aos="zoom-in"
      data-aos-delay="150"
    >
      <div className="mini-title">
        <h5 className="">{!language ? "¿Que sigue?" : "What is next?"}</h5>
      </div>

      <div className="contact-title text-center">
        <h2 className="text-titleText text-[clamp(15px,8vw,50px)] leading-[5rem] sm:leading-[2.5rem] opacity-80">
          {!language ? "Contáctame" : "Get In Touch"}
        </h2>
      </div>

      {/* Mensaje de éxito */}
      {showSuccessMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
          {!language
            ? "¡Mensaje enviado exitosamente! Te responderé pronto."
            : "Message sent successfully! I will reply soon."}
        </div>
      )}

      {/* Mensaje de email reciente */}
      {isEmailSentRecently && !showSuccessMessage && (
        <div className="bg-transparent m-0 text-2xl text-pText border-[#64ffda54] border rounded mb-4 text-center px-4 py-3 shadow-[0_5px_25px_#64ffda1a]" >
          {!language
            ? "He recibido tu mensaje. Te responderé en menos de 24 horas."
            : "I have received your message. I will reply in less than 24 hours."}
        </div>
      )}

      {/* Formulario */}
      {!isEmailSentRecently && (
        <form
          onSubmit={handleSubmit}
          className="w-full border-2 border-[#64ffda54] p-14 rounded-xl  mx-auto space-y-4 shadow-[0_20px_40px_#64ffda1a] md:p-8 "
        >
          <div className="flex justify-center align-center gap-5 sm:flex-col">
            <div className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={!language ? "Nombre" : "Name"}
                disabled={isSubmitting}
                style={{
                  WebkitBoxShadow: "0 0 0 1000px transparent inset",
                  backgroundColor: "transparent !important",
                  background: "transparent !important",
                  color: "var(--pText)",
                  width: "100%",
                  minWidth: "100%"
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors bg-transparent focus:border-skyblue ${
                  touched.name && errors.name
                    ? "border-red-500"
                    : "border-[#64ffda54]"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={!language ? "Email" : "Email"}
                disabled={isSubmitting}
                style={{
                  WebkitBoxShadow: "0 0 0 1000px transparent inset",
                  backgroundColor: "transparent !important",
                  background: "transparent !important",
                  color: "var(--pText)",
                  width: "100%",
                  minWidth: "100%"
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors focus:border-skyblue bg-transparent ${
                  touched.email && errors.email
                    ? "border-red-500"
                    : "border-[#64ffda54]"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              rows="4"
              placeholder={
                !language
                  ? "Cuéntame en que puedo ayudarte"
                  : "Tell me how I can help you"
              }
              disabled={isSubmitting}
              style={{
                WebkitBoxShadow: "0 0 0 1000px transparent inset",
                backgroundColor: "transparent !important",
                background: "transparent !important",
                color: "var(--pText)",
                width: "100%",
                minWidth: "100%"
              }}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-vertical min-h-[50px] max-h-[200px] focus:border-skyblue bg-transparent ${
                touched.message && errors.message
                  ? "border-red-500"
                  : "border-[#64ffda54]"
              } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            />
            {touched.message && errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={
              isSubmitting ||
              !formData.name.trim() ||
              !formData.email.trim() ||
              !formData.message.trim() ||
              (errors.name && errors.name !== "") ||
              (errors.email && errors.email !== "") ||
              (errors.message && errors.message !== "")
            }
            className={`contact-button custonButton px-8 py-4  w-full mt-4 ${
              isSubmitting ||
              !formData.name.trim() ||
              !formData.email.trim() ||
              !formData.message.trim() ||
              (errors.name && errors.name !== "") ||
              (errors.email && errors.email !== "") ||
              (errors.message && errors.message !== "")
                ? "opacity-50 cursor-not-allowed "
                : "transform hover:scale-[0.99]"
            }`}
          >
            {isSubmitting
              ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {!language ? "Enviando..." : "Sending..."}
              </div>
                )
              : !language
                  ? (
                      "Enviar mensaje"
                    )
                  : (
                      "Send message"
                    )}
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
