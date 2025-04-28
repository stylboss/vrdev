"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

export async function sendContactEmail(formData: FormData) {
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
    subject: `Nouveau contact: ${projectType || "Demande de contact"}`,
    text: `Nom: ${name}\nEmail: ${email}\nType: ${projectType}\nMessage:\n${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Nodemailer response info:", info);
    redirect("/contact?success=1");
  } catch (e) {
    // Only log real errors, not NEXT_REDIRECT
    if (e && typeof e === "object" && "digest" in e && typeof e.digest === "string" && e.digest.startsWith("NEXT_REDIRECT")) {
      throw e;
    }
    console.error("Nodemailer error:", e);
    redirect("/contact?error=1");
  }
}