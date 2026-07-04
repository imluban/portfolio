import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend(
    process.env.RESEND_API_KEY
  );

  const body = await req.json();

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["your@email.com"],
      subject: body.subject,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Message:</strong></p>

        <p>${body.message}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}