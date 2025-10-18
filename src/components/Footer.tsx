export default function Footer() {
return (
<footer className="mt-16 border-t border-neutral-200">
<div className="section py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
<p>© {new Date().getFullYear()} Carvalho&GomesConstrução. Todos os direitos reservados.</p>
<div className="flex items-center gap-4">
<a href="#" className="hover:opacity-80">Termos e Condições</a>
<a href="#" className="hover:opacity-80">Política de Privacidade</a>
<a href="#" className="hover:opacity-80">Facebook</a>
<a href="#" className="hover:opacity-80">Instagram</a>
</div>
</div>
</footer>
);
}