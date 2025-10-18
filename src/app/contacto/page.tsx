import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  return (
    <section className="section py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Contacte-nos</h1>
        <p className="text-neutral-600 mb-6">
          Diga-nos o que pretende remodelar. Respondemos rapidamente com
          orçamento indicativo.
        </p>
        <ul className="space-y-2 text-neutral-700">
          <li><strong>Telefone:</strong> 9XX XXX XXX</li>
          <li><strong>Email:</strong> contacto@gmail.com</li>
          <li><strong>Horário:</strong> Seg–Sex, 9h–18h</li>
          <li><strong>Morada:</strong> Lisboa </li>
        </ul>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}
