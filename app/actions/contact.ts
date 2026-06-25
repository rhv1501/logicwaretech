"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const objective = formData.get("objective") as string;
  const parameters = formData.get("parameters") as string;

  if (!firstName || !lastName || !email || !objective) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.logicwaretech.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "info@logicwaretech.com",
        pass: "Swastik@1511",
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"LogicWare Audit Form" <info@logicwaretech.com>`,
      to: "info@logicwaretech.com",
      replyTo: email,
      subject: `New System Audit Request: ${objective}`,
      html: `
        <div style="font-family: monospace; padding: 20px; background-color: #F0F6F9; border-radius: 12px; color: #141624;">
          <h2 style="color: #38C7D2;">SEQUENCE INITIATED</h2>
          <hr style="border-color: #38C7D2; opacity: 0.2;" />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Target Objective:</strong> ${objective}</p>
          <p><strong>System Parameters:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 8px;">
            ${parameters ? parameters.replace(/\n/g, '<br/>') : "<em>No parameters provided.</em>"}
          </div>
        </div>
      `,
    };

    const userMailOptions = {
      from: `"LogicWare Tech" <info@logicwaretech.com>`,
      to: email,
      subject: `System Audit Request Received`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #141624;">
          <h2 style="color: #38C7D2;">Sequence Initiated.</h2>
          <p>Hi ${firstName},</p>
          <p>This is a confirmation that our architecture board has received your parameters for the <strong>${objective}</strong>.</p>
          <p>We are currently reviewing your stack requirements and will establish a secure line with you shortly.</p>
          <br/>
          <p>Best regards,<br/><strong>The LogicWare Engineering Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to transmit parameters." };
  }
}
