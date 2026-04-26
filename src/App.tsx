import { lazy, Suspense } from "react";
import Background from "@/components/layout/Background";
import CursorGlow from "@/components/layout/CursorGlow";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

const Proof = lazy(() => import("@/components/sections/Proof"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Experience = lazy(() => import("@/components/sections/Experience"));
const About = lazy(() => import("@/components/sections/About"));
const Contact = lazy(() => import("@/components/sections/Contact"));

function SectionFallback() {
  return (
    <div className="container-px section-y mx-auto max-w-7xl">
      <div className="h-64 animate-pulse rounded-3xl border border-white/5 bg-white/[0.02]" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Proof />
          <Projects />
          <Skills />
          <Experience />
          <About />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
