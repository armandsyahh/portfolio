"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Globe, Send, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-lg font-medium text-blue-600">
              Hello, I'm 👋
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
              {profile.name}
            </h1>

            <h2 className="mb-6 text-2xl font-semibold text-slate-600">
              {profile.role} • {profile.subtitle}
            </h2>

            <p className="mb-10 max-w-xl text-lg leading-8 text-slate-500">
              {profile.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={profile.cv}
                className="rounded-xl bg-slate-900 px-7 py-4 text-white transition hover:bg-slate-800"
              >
                Download CV
              </Link>

              <Link
                href="#projects"
                className="flex items-center gap-2 rounded-xl border px-7 py-4 hover:bg-slate-100"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex gap-5">
              <Link href={profile.github} target="_blank">
                <Globe className="transition hover:text-blue-600" />
              </Link>

              <Link href={profile.linkedin} target="_blank">
                <Send className="transition hover:text-blue-600" />
              </Link>

              <Link href={`mailto:${profile.email}`}>
                <Mail className="transition hover:text-blue-600" />
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative h-[500px] w-[500px]">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />

              <Image
                src="/images/profile/armand1.jpeg"
                alt={profile.name}
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}