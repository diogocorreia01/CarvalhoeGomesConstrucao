import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Link from "next/link";


export default function HomePage() {
return (
<>
<Hero />
<section className="section py-16">
<Services heading="Serviços de Remodelação" subtitle="Trabalhos completos: cozinhas, WC, pintura, canalização, eletricidade e mais." />
</section>
<section className="section py-16">
<Gallery />
</section>
<section className="section py-16 text-center">
<h2 className="text-3xl font-semibold mb-4">Pronto para transformar o seu espaço?</h2>
<p className="text-neutral-600 mb-6">Peça um orçamento gratuito, sem compromisso.</p>
<Link href="/contacto" className="btn-primary">Contactar Agora</Link>
</section>
</>
);
}