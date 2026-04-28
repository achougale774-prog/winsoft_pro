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
      subject: type === 'demo' ? `New Demo Request from ${data.name}` : `New Contact Request from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'N/A'}
        Company: ${data.company || 'N/A'}
        ${type === 'demo' ? `Industry: ${data.industry}` : ''}
        ${type === 'demo' ? `Preferred Date: ${data.preferred_date}` : ''}
        ${type === 'demo' ? `Preferred Time: ${data.preferred_time}` : ''}
        ${type === 'contact' ? `Inquiry Type: ${data.inquiry_type}` : ''}
        
        Message/Challenge:
        ${data.message || data.current_challenges || 'None'}
      `,
    }

    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions)
      console.log("Email sent successfully to abhishekchougale038@gmail.com")
    } else {
      console.warn("EMAIL_PASS not set in .env.local. Email not actually sent.")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 })
  }
}
