interface TimelineItem {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

export default function Timeline({
  title,
  items,
}: TimelineProps) {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold text-blue-600">
            TIMELINE
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {title}
          </h2>

        </div>

        <div className="relative mx-auto max-w-4xl">

          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

          {items.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-12 flex w-full ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              <div className="ml-12 w-full rounded-2xl border bg-white p-6 shadow-sm md:ml-0 md:w-[46%]">

                <span className="text-sm font-semibold text-blue-600">
                  {item.year}
                </span>

                <h3 className="mt-2 text-xl font-bold">
                  {item.title}
                </h3>

                <h4 className="text-slate-500">
                  {item.subtitle}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

              </div>

              <div className="absolute left-4 top-7 h-4 w-4 rounded-full border-4 border-white bg-blue-600 md:left-1/2 md:-translate-x-1/2" />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}