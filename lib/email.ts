export interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
  inquiry_type: string
}

export interface DemoRequestData {
  name: string
  email: string
  company: string
  phone: string
  industry: string
  company_size: string
  current_challenges: string
  preferred_date: string
  preferred_time: string
}

export async function sendContactNotification(data: ContactFormData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'contact', data }),
    })
    return await response.json()
  } catch (error) {
    console.error("Error sending contact email:", error)
    return { success: false }
  }
}

export async function sendDemoNotification(data: DemoRequestData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'demo', data }),
    })
    return await response.json()
  } catch (error) {
    console.error("Error sending demo email:", error)
    return { success: false }
  }
}
