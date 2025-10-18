import Link from "next/link";


export default function Hero() {
return (
<section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center">
<div className="bg-black/50">
<div className="section py-28 md:py-40 text-white">
<h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
Remodelações de confiança para a sua casa ou empresa
</h1>
<p className="mt-4 max-w-2xl text-neutral-200">
Pinturas, canalização, eletricidade, cozinhas e casas de banho. Orçamentos rápidos e justos.
</p>
<div className="mt-8 flex gap-4">
<Link href="/contacto" className="btn-primary">Pedir Orçamento</Link>
<Link href="/servicos" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-white/70">Ver Serviços</Link>
</div>
</div>
</div>
</section>
);
}