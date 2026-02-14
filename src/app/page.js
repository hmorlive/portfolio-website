"use client";

import { useState } from "react";
import Link from "next/link";
import AboutSection from "./about/about";
import RippleEffect from "./ripple";
import { FaPlayCircle, FaRegPauseCircle, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [animate, setAnimate] = useState(true);

  return (
    <>
      <RippleEffect animate={animate} />

      <main className="relative w-full overflow-hidden">
        <div className="relative z-10">
          {/* ── Hero ── */}
          <section className="container mx-auto flex min-h-screen flex-col justify-center px-4 py-16">
            <div className="relative max-w-3xl">
              {/* Decorative line */}
              <div
                className={[
                  "pointer-events-none absolute -left-6 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-blue-600/40 via-blue-600/10 to-transparent",
                  animate ? "animate-slide-top" : "",
                ].join(" ")}
                aria-hidden="true"
              />

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900">
                Hazmed Moreno
              </h1>

              <h2 className="mt-2 text-xl sm:text-2xl font-light text-blue-600">
                Software Engineer
              </h2>

              {/* Accent rule */}
              <div className="mt-6 h-px w-12 bg-blue-600" aria-hidden="true" />

              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">
                Full-stack engineer building production web and desktop systems
                with TypeScript, React/Next.js, and AWS serverless.
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Production desktop system in use since 2023 · 5,000+ orders
                processed.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/resume" className="btn-primary">
                  View Resume
                </Link>

                <Link href="mailto:mail@hazmedmoreno.com" className="btn-secondary">
                  <FaEnvelope className="text-blue-600" /> Email
                </Link>

                <Link
                  href="https://github.com/hmorlive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FaGithub className="text-blue-600" /> GitHub
                </Link>
              </div>
            </div>

            {/* Animation toggle */}
            <button
              type="button"
              onClick={() => setAnimate((v) => !v)}
              aria-label={animate ? "Pause background animation" : "Play background animation"}
              className="fixed bottom-6 right-6 z-50 rounded-full p-2 text-zinc-300
                         hover:text-blue-600 transition-colors
                         focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {animate ? (
                <FaRegPauseCircle className="text-lg" title="Pause animation" />
              ) : (
                <FaPlayCircle className="text-lg" title="Play animation" />
              )}
            </button>
          </section>

          <AboutSection />
        </div>
      </main>
    </>
  );
}
