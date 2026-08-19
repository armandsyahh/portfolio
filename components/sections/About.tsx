import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">

          <p className="font-semibold text-blue-600">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Get to Know Me
          </h2>

        </div>

        {/* Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Profile Image */}
          <div className="flex justify-center">

            <div className="relative h-[420px] w-[320px] overflow-hidden rounded-3xl shadow-xl">

              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Profile Information */}
          <div>

            <h3 className="mb-4 text-3xl font-bold">
              {profile.name}
            </h3>

            <p className="mb-8 leading-8 text-slate-600">
              {profile.description}
            </p>

            <div className="grid gap-6 sm:grid-cols-2">

              <InfoItem
                title="University"
                value={profile.university}
              />

              <InfoItem
                title="Major"
                value={profile.major}
              />

              <InfoItem
                title="Location"
                value={profile.location}
              />

              <InfoItem
                title="Email"
                value={profile.email}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function InfoItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border p-5">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h4 className="mt-2 font-semibold">
        {value}
      </h4>

    </div>
  );
}