import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''
    let data: Record<string, string> = {}
    const fileNames: string[] = []

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      formData.forEach((value, key) => {
        if (key === 'attachments' && value instanceof File) {
          fileNames.push(`${value.name} (${(value.size/1024).toFixed(0)}KB)`)
        } else if (typeof value === 'string') {
          data[key] = value
        }
      })
    } else {
      data = await req.json()
    }

    const { name, email, phone, university, service, budget_selected, budget_custom, message } = data

    const emailBody = `
NEW CONTACT FORM — NursingSchoolTutors.com
==========================================
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
University: ${university || 'Not provided'}
Service: ${service}
Budget Selected: ${budget_selected || 'None'}
Budget Custom: $${budget_custom || 'Not entered'}
${fileNames.length > 0 ? `Attached Files: ${fileNames.join(', ')}` : ''}
Message:
${message}
==========================================
Reply via WhatsApp: https://wa.me/17654709090
    `.trim()

    if (process.env.SMTP_HOST) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      await transporter.sendMail({
        from: `"NursingSchoolTutors Form" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'instanthelp24hr@gmail.com',
        subject: `New Quote: ${service} — ${name}`,
        text: emailBody,
      })
    }

    console.log('Contact form submission:', emailBody)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
