import emailjs from 'emailjs-com'

export const ContactForm = {
  name: '',
  email: '',
  message: ''
}

export const EmailService = {
  serviceId: 'service_o6bzdhi',
  templateId: 'template_zvx6vvl', // Template para aabattistini@gmail.com
  confirmationTemplateId: 'template_gdu05bd', // Template para el cliente
  publicKey: 'FFOHIrXtQ9j0y3UXO',

  // Inicializar EmailJS
  init () {
    emailjs.init(this.publicKey)
  },

  // Enviar email al propietario
  sendEmailToOwner (formData) {
    const templateParams = {
      to_email: 'aabattistini@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email
    }

    return emailjs.send(
      this.serviceId,
      this.templateId,
      templateParams
    )
  },

  // Enviar confirmación al cliente
  sendConfirmationToClient (formData) {
    const templateParams = {
      to_email: formData.email,
      to_name: formData.name,
      message: formData.message
    }

    return emailjs.send(
      this.serviceId,
      this.confirmationTemplateId,
      templateParams
    )
  },

  // Enviar ambos emails
  async sendContactEmail (formData) {
    try {
      const emailToOwner = this.sendEmailToOwner(formData)
      const confirmationToClient = this.sendConfirmationToClient(formData)

      await Promise.all([emailToOwner, confirmationToClient])
      return { success: true }
    } catch (error) {
      console.error('Error sending email:', error)
      return { success: false, error }
    }
  },

  // Métodos para manejar localStorage con expiración
  setEmailSent () {
    const expirationTime = new Date().getTime() + (24 * 60 * 60 * 1000) // 24 horas
    const data = {
      sent: true,
      expiration: expirationTime
    }
    localStorage.setItem('contactEmailSent', JSON.stringify(data))
  },

  isEmailSentRecently () {
    const stored = localStorage.getItem('contactEmailSent')
    if (!stored) return false

    try {
      const data = JSON.parse(stored)
      const now = new Date().getTime()

      if (now > data.expiration) {
        localStorage.removeItem('contactEmailSent')
        return false
      }

      return data.sent
    } catch {
      localStorage.removeItem('contactEmailSent')
      return false
    }
  },

  clearEmailSentFlag () {
    localStorage.removeItem('contactEmailSent')
  }
}
