import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, data } = body

    // We will send email using nodemailer
    // Ensure you set EMAIL_USER and EMAIL_PASS in your .env.local file
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'abhishekchougale038@gmail.com', // Replace with your sending email
        pass: process.env.EMAIL_PASS || '', // App password
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER || 'abhishekchougale038@gmail.com',
      to: 'abhishekchougale038@gmail.com',
      subject: `🚨 LEAD: ${data.name} | ${data.phone || 'No Phone'} | ${type.toUpperCase()} 🚨`,
      text: `
📢 NEW LEAD ALERT!
---------------------------
👤 NAME: ${data.name}
📞 PHONE: ${data.phone || 'N/A'}
📧 EMAIL: ${data.email}
🏢 COMPANY: ${data.company || 'N/A'}
📝 TYPE: ${type === 'demo' ? `Demo (${data.industry})` : `Contact (${data.inquiry_type})`}
📅 DATE/TIME: ${type === 'demo' ? `${data.preferred_date} at ${data.preferred_time}` : 'N/A'}

💬 MESSAGE:
${data.message || data.current_challenges || 'No message provided.'}
---------------------------
Check your dashboard for details.
    }

    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions)
      console.log("Email sent successfully to abhishekchougale038@gmail.com")
    } else {
      console.warn("EMAIL_PASS not set in .env.local. Email not actually sent.")
    }

    // --- Optional: Automated WhatsApp/SMS Notification (via CallMeBot or Webhook) ---
    // If you want background notifications without customer interaction, 
    // you can use a service like CallMeBot (Free) or Twilio (Paid).
    
    const notificationMessage = `*New Lead Alert!*%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone || 'N/A'}%0A*Type:* ${type === 'demo' ? 'Demo' : 'Contact'}%0A*Inquiry:* ${data.inquiry_type || data.industry}%0A*Message:* ${data.message || data.current_challenges || 'None'}`

    // 1. WhatsApp Notification via CallMeBot (Requires one-time setup: https://www.callmebot.com/blog/free-api-whatsapp-messages/)
    if (process.env.CALLMEBOT_API_KEY) {
      try {
        const waPhone = '919325519485' // User's number
        const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${waPhone}&text=${notificationMessage}&apikey=${process.env.CALLMEBOT_API_KEY}`
        await fetch(waUrl)
        console.log("CallMeBot notification sent")
      } catch (waError) {
        console.error("CallMeBot error:", waError)
      }
    }

    // 2. Webhook (For Zapier, Make, etc. to route to WhatsApp/SMS)
    if (process.env.NOTIFICATION_WEBHOOK_URL) {
      try {
        await fetch(process.env.NOTIFICATION_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            alert: "New Lead from Winsoft Website",
            details: data,
            timestamp: new Date().toISOString()
          })
        })
      } catch (webhookError) {
        console.error("Webhook error:", webhookError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 })
  }
}
