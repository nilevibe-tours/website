import nodemailer from "nodemailer";

const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { isReview, name, email, notes } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: myPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Nile Vibe Tours" <nilevibetours@gmail.com>`,
      to: myEmail,
      subject: `New ${isReview ? "Review" : "Message"} Received!`,
      html: `
        <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 12px; font-family: Arial, sans-serif; border: 1px solid #eee;">
          <h2 style="color: #0B1E36; text-align: center; margin-bottom: 25px;">
            New Message Received!
          </h2>
          <div style="background: #F8F1E5; border-left: 4px solid #CBA135; padding: 15px 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Notes:</strong> ${notes}</p>
          </div>
          <p style="text-align: center; color: #555; font-size: 14px;">
            This message was generated automatically from your booking form.
          </p>
          <div style="text-align: center; margin-top: 25px;">
            <a href="https://nilevibetours.com" 
              style="background: #CBA135; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-size: 14px;">
              Visit Website
            </a>
          </div>
        </div>
      `,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending emails", error });
  }
}
