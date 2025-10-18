export default function Gallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Alguns Trabalhos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgs.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <img
              src={src}
              alt="Projeto de remodelação"
              className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
