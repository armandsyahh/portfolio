import SkillCard from "@/components/common/SkillCard";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 py-24"
    >
      <div className="container mx-auto px-6">

        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-600">
            SKILLS
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            I build modern web applications using various frontend,
            backend, database, and development tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <SkillCard
            title="Frontend"
            items={skills.frontend}
          />

          <SkillCard
            title="Backend"
            items={skills.backend}
          />

          <SkillCard
            title="Database"
            items={skills.database}
          />

          <SkillCard
            title="Tools"
            items={skills.tools}
          />

        </div>

      </div>
    </section>
  );
}