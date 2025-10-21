export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const nome = data.get("nome");
    const email = data.get("email");
    const telefone = data.get("telefone");
    const mensagem = data.get("mensagem");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Remodelações" <${process.env.MAIL_USER}>`,
      to: "carvalhoegomes.geral@gmail.com",
      subject: "Novo pedido de contacto — Remodelações PT",
      html: `
        <h2>Novo contacto recebido</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong><br>${mensagem}</p>
      `,
      replyTo: email ? String(email) : undefined,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return new Response(JSON.stringify({ success: false, error: "Erro ao enviar email" }), {
      status: 500,
    });
  }
}
