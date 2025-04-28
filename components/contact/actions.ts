"use server";

import nodemailer from "nodemailer";

// Return a success/error result for toast usage
export async function sendContactEmail(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const projectType = formData.get("projectType") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.BUSINESS_EMAIL,
    subject: `Nouveau message de contact (${projectType})`,
    text: `Nom: ${name}\nEmail: ${email}\nType de projet: ${projectType}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Erreur d'envoi." };
  }
}