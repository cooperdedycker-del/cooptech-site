// api/send-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, serviceType, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const html = `
      <h2>New CoopTech Service Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Service Type:</strong> ${serviceType || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br/>")}</p>
    `;

    const data = await resend.emails.send({
      from: "CoopTech <cooper@cooptechllc.com>", // MUST be from your verified Resend domain
      to: ["cooper@cooptechllc.com"],           // <-- change to where you want requests delivered
      subject: "New CoopTech Service Request",
      html,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
