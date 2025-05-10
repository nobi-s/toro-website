"use server"

import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name") as string
  const company = formData.get("company") as string
  const email = formData.get("email") as string
  const details = formData.get("details") as string

  if (!name || !company || !email || !details) {
    throw new Error("All fields are required")
  }

  try {
    console.log("Sending email with data:", { name, company, email, details })

    await sgMail.send({
      from: "info@toro-inc.com",
      to: "info@toro-inc.com",
      subject: `新規問い合わせ | ${company} ${name}` ,
      text: `
        名前: ${name}
        会社: ${company}
        Email: ${email}
        
        内容:
        ${details}
      `,
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send inquiry")
  }
}
