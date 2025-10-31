import BeforeAfter from "@/components/BeforeAfter";

export default function Gallery() {
  const projects = [
    {
      before:
        "/images/antes_1.jpeg",
      after:
        "/images/depois_1.jpeg",
    },
    {
      before:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      after:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      before:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      after:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      before:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      after:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      before:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      after:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      before:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      after:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    }
  ];

  return (
    <section className="section py-16">
      <h2 className="text-3xl font-semibold mb-10 text-center">Alguns Trabalhos</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((p, i) => (
          <BeforeAfter key={i} before={p.before} after={p.after} />
        ))}
      </div>
    </section>
  );
}
