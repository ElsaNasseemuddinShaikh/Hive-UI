import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;
    const linkedin = formData.get("linkedin") as string;
    const github = formData.get("github") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const resume = formData.get("resume") as File;

    if (!resume) {
      return new Response(
        JSON.stringify({ error: "Resume file is required." }),
        { status: 400 }
      );
    }

    const resumeBuffer = await resume.arrayBuffer();
    const resumeContent = Buffer.from(resumeBuffer);

    const emailBody = `
    <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <h2 style="color: #2c3e50; margin-bottom: 20px;">📄 New Job Application: <span style="color:#2980b9;">${jobTitle}</span></h2>

        <table cellpadding="8" cellspacing="0" style="width: 100%; font-size: 15px;">
          <tr><td><strong>Full Name:</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>City:</strong></td><td>${city}</td></tr>
          ${linkedin ? `<tr><td><strong>LinkedIn:</strong></td><td><a href="${linkedin}" style="color:#2980b9;">${linkedin}</a></td></tr>` : ""}
          ${github ? `<tr><td><strong>GitHub:</strong></td><td><a href="${github}" style="color:#2980b9;">${github}</a></td></tr>` : ""}
        </table>

        ${
          coverLetter
            ? `
          <div style="margin-top: 30px;">
            <h3 style="color:#34495e;">💬 Cover Letter</h3>
            <p style="white-space: pre-line;">${coverLetter}</p>
          </div>
        `
            : ""
        }

        <hr style="margin-top: 40px;" />
        <p style="color: #888; font-size: 13px;">
          This job application was submitted via the Alpha Hive AI job portal.<br/>
          If you have any questions, please reach out to the candidate directly at <a href="mailto:${email}" style="color:#2980b9;">${email}</a>.
        </p>
      </div>
    </div>
  `;

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "jeromy.leannon16@ethereal.email",
        pass: "XrkcZkFewukFvddkPm",
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: "jobs@alphahiveai.com",
      subject: `Job Application for ${jobTitle}`,
      html: emailBody,
      attachments: [
        {
          filename: resume.name,
          content: resumeContent,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    return new Response(JSON.stringify({ success: true, info }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
