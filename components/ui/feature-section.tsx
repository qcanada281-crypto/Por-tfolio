"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Layers,
  Cloud,
  ShieldAlert,
  Sparkles,
  Zap,
  Activity,
  Cpu,
  Lock,
} from "lucide-react";

interface Pillar {
  number: string;
  tagline: string;
  title: string;
  description: string;
  skills: string[];
  metricLabel: string;
  metricValue: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PILLARS: Pillar[] = [
  {
    number: "PILLAR // 01",
    tagline: "CORE ARCHITECTURE",
    title: "Full-Stack & Systems Architecture",
    description:
      "Architecting high-throughput backend services, relational & NoSQL database models, robust REST/GraphQL APIs, and clean modular code adhering to SOLID principles.",
    skills: [
      "Next.js & React",
      "Node / TypeScript",
      "Python & FastAPI",
      "PostgreSQL & Redis",
      "GraphQL / REST",
      "Clean DDD & MVC",
    ],
    metricLabel: "High Availability",
    metricValue: "Latency: < 50ms",
    icon: Server,
  },
  {
    number: "PILLAR // 02",
    tagline: "CREATIVE EXPERIENCE",
    title: "Modern UI & Creative Frontend",
    description:
      "Crafting immersive, micro-animated user interfaces with state-of-the-art frameworks, reactive state management, sub-second load times, and pixel perfection.",
    skills: [
      "Framer Motion & Three.js",
      "Tailwind & Vanilla CSS",
      "Design Systems",
      "Accessibility (A11y)",
      "Responsive Layouts",
      "Micro-Interactions",
    ],
    metricLabel: "Lighthouse Score",
    metricValue: "99+ Performance",
    icon: Layers,
  },
  {
    number: "PILLAR // 03",
    tagline: "CLOUD & LIFECYCLE",
    title: "DevOps & Cloud Infrastructure",
    description:
      "Automating deployment lifecycles, container orchestration, edge computing, and cloud infrastructure with high reliability, zero downtime, and monitoring.",
    skills: [
      "Docker & Containers",
      "CI/CD Pipelines",
      "AWS / Vercel Edge",
      "Nginx & Reverse Proxy",
      "Prometheus & Grafana",
      "Linux Hardening",
    ],
    metricLabel: "Zero Downtime",
    metricValue: "99.99% Guaranteed Uptime",
    icon: Cloud,
  },
  {
    number: "PILLAR // 04",
    tagline: "RESILIENCE & INTEL",
    title: "Security, AI & Performance Tuning",
    description:
      "Integrating intelligent AI/LLM pipelines, RAG vector search, Zero-Trust authentication protocols, and rigorous profiling for low latency and high security.",
    skills: [
      "AI Agents & LangChain",
      "Vector Embeddings",
      "Zero-Trust & OAuth2",
      "OWASP Hardening",
      "Memory Profiling",
      "Database Optimization",
    ],
    metricLabel: "Security First",
    metricValue: "Zero-Trust & Hardened",
    icon: ShieldAlert,
  },
];

export default function FeatureSection() {
  return (
    <section
      id="competences"
      className="relative w-full overflow-hidden bg-[#07090E] px-6 py-24 text-slate-100 md:py-32 border-t border-slate-800/40"
      aria-label="Capabilities and Engineering Mastery"
    >
      {/* Background Ambient Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(207,255,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(207,255,4,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-[#CFFF04]/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Introduction */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#CFFF04]/30 bg-[#CFFF04]/10 px-4 py-1.5 font-mono text-xs font-bold tracking-widest text-[#CFFF04] uppercase shadow-[0_0_20px_rgba(207,255,4,0.15)] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#CFFF04] animate-ping" />
            <span>// ARCHITECTURAL CAPABILITIES &amp; STACK</span>
          </div>
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            ENGINEERED{" "}
            <span className="font-brier text-[#CFFF04] normal-case text-glow-neon">
              Compétences
            </span>
          </h2>
          <p className="max-w-2xl text-sm font-medium leading-relaxed text-slate-400 md:text-base">
            Delivering robust full-stack software systems, reactive micro-animated interfaces, automated DevOps pipelines, and AI-accelerated security architecture.
          </p>
        </div>

        {/* 2-Column Responsive Luxury Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mb-16">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090D14]/90 p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:border-[#CFFF04]/50 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(207,255,4,0.15)]"
              >
                {/* Ambient Radial Spotlight inside Card */}
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#CFFF04]/5 blur-2xl transition-all duration-500 group-hover:bg-[#CFFF04]/15 pointer-events-none" />

                <div>
                  {/* Top Meta Bar */}
                  <div className="mb-6 flex items-center justify-between">
                    {/* Rotating 360deg Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#CFFF04]/30 bg-[#CFFF04]/10 text-[#CFFF04] shadow-[0_0_20px_rgba(207,255,4,0.15)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[360deg] group-hover:scale-110 group-hover:border-[#CFFF04] group-hover:bg-[#CFFF04]/20 group-hover:shadow-[0_0_30px_rgba(207,255,4,0.35)]">
                      <Icon className="h-7 w-7 transition-all duration-300" />
                    </div>
                    <span className="rounded-lg border border-[#CFFF04]/20 bg-[#CFFF04]/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-[#CFFF04]/90">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#CFFF04] md:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-400">
                    {pillar.description}
                  </p>

                  {/* Technical Skills Pills */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {pillar.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CFFF04]/40 hover:bg-[#CFFF04]/10 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Status Metric & Animated Accent Line */}
                <div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-[#CFFF04]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CFFF04] animate-pulse" />
                      {pillar.metricLabel}
                    </span>
                    <span>{pillar.metricValue}</span>
                  </div>
                  {/* Subtle animated progress line on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#CFFF04] to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
