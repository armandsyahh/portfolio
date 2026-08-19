import Timeline from "./Timeline";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const items = experience.map((item) => ({
    id: item.id,
    year: item.year,
    title: item.company,
    subtitle: item.position,
    description: item.description,
  }));

  return <Timeline title="Experience" items={items} />;
}