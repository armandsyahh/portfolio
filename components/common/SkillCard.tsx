interface SkillCardProps {
  title: string;
  items: {
    name: string;
    icon: string;
  }[];
}

export default function SkillCard({
  title,
  items,
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-6 text-xl font-bold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item.name}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}