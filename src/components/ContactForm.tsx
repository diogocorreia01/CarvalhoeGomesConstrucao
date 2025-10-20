"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const FORMSPREE_ACTION = "https://formspree.io/f/xjkaznro";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("A enviar...");

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch(FORMSPREE_ACTION, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("✅ Obrigado! A sua mensagem foi enviada com sucesso.");
      form.reset();
    } else {
      setStatus("❌ Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium">Nome</label>
        <input
          name="nome"
          required
          className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Telefone</label>
          <input
            name="telefone"
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Mensagem</label>
        <textarea
          name="mensagem"
          rows={5}
          required
          className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        />
      </div>

      <input type="hidden" name="_subject" value="Novo pedido de orçamento — Remodelações PT" />
      <input type="hidden" name="_language" value="pt" />

      <button className="btn-primary w-full" type="submit">
        Enviar
      </button>

      {status && <p className="text-sm text-neutral-600 mt-2">{status}</p>}
    </form>
  );
}
