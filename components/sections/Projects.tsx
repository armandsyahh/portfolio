import ProjectCard from "@/components/common/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="container mx-auto px-6">

        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-600">
            PROJECTS
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Featured Works
          </h2>
        </div>

        {featured && (
          <div className="mb-20">
            <ProjectCard project={featured} />
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {others.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}