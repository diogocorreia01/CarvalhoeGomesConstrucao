import { ReactNode } from "react";


const items = [
{ title: "Pinturas", desc: "Interior e exterior, tratamento de humidades e impermeabilização." },
{ title: "Canalização", desc: "Reparações, substituições e instalações completas." },
{ title: "Eletricidade", desc: "Quadros, tomadas, iluminação LED e certificações." },
{ title: "Cozinhas & WC", desc: "Demolição, colocação de azulejo, móveis e loiças." },
{ title: "Pavimentos", desc: "Flutuante, vinílico, mosaico e carpintarias." },
{ title: "Pequenas Obras", desc: "Drywall, portas, janelas, manutenção e mais." },
];


export default function Services({ heading, subtitle, detailed }: { heading: string; subtitle?: string; detailed?: boolean; children?: ReactNode; }) {
return (
<div>
<h2 className="text-3xl font-semibold">{heading}</h2>
{subtitle && <p className="text-neutral-600 mt-2">{subtitle}</p>}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
{items.map((it) => (
<div key={it.title} className="card p-6">
<h3 className="font-semibold text-lg">{it.title}</h3>
<p className="text-neutral-600 mt-1">{it.desc}</p>
{detailed && (
<ul className="text-neutral-600 mt-3 list-disc list-inside text-sm space-y-1">
<li>Materiais certificados</li>
<li>Equipa especializada</li>
<li>Garantia de obra</li>
</ul>
)}
</div>
))}
</div>
</div>
);
}