import Timeline from "./Timeline";
import { education } from "@/data/portfolio";

export default function Education() {
  const items = education.map((item) => ({
    id: item.id,
    year: item.year,
    title: item.institution,
    subtitle: item.title,
    description: item.description,
  }));

  return <Timeline title="Education" items={items} />;
}