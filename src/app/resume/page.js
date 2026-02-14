"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";
import { FaArrowLeft, FaEnvelope, FaGithub, FaGlobe, FaLanguage, FaLinkedin, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

export default function Resume() {
  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Hazmed-Moreno-Resume",
    removeAfterPrint: true,
  });

  return (
    <div className="flex flex-col items-center py-10 print:py-0">
      <Link
        href="/"
        className="fixed top-10 left-10 flex items-center gap-1.5 text-xs text-zinc-400
                   hover:text-blue-600 transition-colors print:hidden"
      >
        <FaArrowLeft /> Home
      </Link>
      <button
        type="button"
        className="btn-primary fixed top-10 right-10 print:hidden"
        onClick={() => handlePrint?.()}
      >
        Print <FaPrint />
      </button>

      <div
        ref={resumeRef}
        className="max-w-5xl w-full min-h-screen print:min-h-0 mx-auto bg-white
                   px-6 sm:px-16 print:px-10 py-8 print:py-5 my-10 print:my-0
                   flex flex-col rounded-md print:rounded-none
                   md:shadow-md print:shadow-none"
      >
        {/* ── Identity Block ── */}
        <header className="pb-3 print:pb-2 border-b border-gray-200">
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            Hazmed Moreno
          </h1>
          <h2 className="text-sm font-medium text-blue-600 mt-0.5">
            Software Engineer
          </h2>
          <ContactSection />
        </header>

        {/* ── Body ── */}
        <SummarySection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <LanguagesSection />
        <ReferenceSection />
      </div>
    </div>
  );
}

/* ─────────────────────────── Sections ─────────────────────────── */

const sectionHeading =
  "text-[0.65rem] uppercase font-semibold tracking-widest text-gray-400 print:text-gray-500 mb-1.5 print:mb-1";

function SummarySection() {
  return (
    <section className="mt-4 print:mt-2">
      <h3 className={sectionHeading}>Summary</h3>
      <p className="text-xs leading-relaxed print:leading-snug">
        Full-stack engineer building production web and desktop systems using
        React, Node.js, and AWS serverless. Developing a multi-tenant website
        builder platform on AWS and maintaining a production Windows desktop
        application for automated order and invoice processing (5,000+ orders
        processed).
      </p>
    </section>
  );
}

function ContactSection() {
  const links = useMemo(
    () => [
      {
        href: "mailto:mail@hazmedmoreno.com",
        text: "mail@hazmedmoreno.com",
        icon: <FaEnvelope />,
      },
      {
        href: "https://hazmedmoreno.com",
        text: "hazmedmoreno.com",
        icon: <FaGlobe />,
        external: true,
      },
      {
        href: "https://github.com/hmorlive",
        text: "@hmorlive",
        icon: <FaGithub />,
        external: true,
      },
      {
        href: "https://www.linkedin.com/in/hazmed",
        text: "@hazmed",
        icon: <FaLinkedin />,
        external: true,
      },
    ],
    [],
  );

  return (
    <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1 mt-2 print:mt-1 text-xs text-gray-600">
      {links.map(({ href, text, icon, external }) => (
        <Link
          key={href}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="flex items-center gap-1 hover:text-blue-600 transition-colors"
        >
          {icon}
          <span>{text}</span>
        </Link>
      ))}
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="mt-4 print:mt-2">
      <h3 className={sectionHeading}>Skills</h3>
      <ul className="list-disc list-inside text-xs space-y-0.5">
        <li>
          <strong>Languages:</strong> TypeScript, JavaScript
        </li>
        <li>
          <strong>Working knowledge:</strong> SQL (Oracle), Python, Java, PHP
        </li>
        <li>
          <strong>Frontend:</strong> React, Next.js, HTML, CSS, TailwindCSS
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express, REST APIs (Electron
          desktop)
        </li>
        <li>
          <strong>Cloud:</strong> AWS (Lambda, API Gateway, S3, CloudFront,
          DynamoDB, SQS), CDK
        </li>
        <li>
          <strong>Datastores:</strong> DynamoDB, MongoDB, MariaDB, SQLite
        </li>
        <li>
          <strong>DevOps/Infra:</strong> Linux (Ubuntu), VPS administration
          (SSH, firewalls), Docker, CI/CD (AWS CodeBuild)
        </li>
        <li>
          <strong>Tools:</strong> Git, GitHub Actions
        </li>
      </ul>
      <p className="text-xs flex items-center gap-1 mt-1.5 print:mt-1">
        <FaLanguage className="text-base" />
        <strong>Bilingual</strong>: English / Spanish
      </p>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="mt-5 print:mt-2">
      <h3 className={sectionHeading}>Experience</h3>

      <div>
        <h4 className="text-sm font-semibold tracking-tighter">
          Full Summit LLC{" "}
          <span className="font-light">(Self-Employed)</span>
        </h4>
        <p className="text-xs text-gray-500">Miami, FL</p>
      </div>

      {/* Role 1 */}
      <div className="mt-2 print:mt-1">
        <p className="text-xs font-semibold">
          Software Engineer{" "}
          <span className="font-light text-gray-500">
            | Aug 2022 – Present
          </span>
        </p>
        <ul className="list-disc list-inside text-xs mt-0.5 space-y-0.5">
          <li>
            Developing SiteVertex, a multi-tenant website builder platform on
            AWS with React frontend (CloudFront) and serverless backend (API
            Gateway, Lambda, DynamoDB); infrastructure managed via AWS CDK.
          </li>
          <li>
            Designed tenant-isolated data modeling in DynamoDB and built REST
            APIs for site configuration and content management; implemented
            CI/CD pipelines deploying across staging and production
            environments.
          </li>
          <li>
            Built and maintain a production Electron desktop application
            deployed on Windows to automate purchase-order parsing and invoice
            generation; 5,000+ orders processed in production since 2023.
          </li>
          <li>
            Eliminated manual data entry by extracting structured fields from
            purchase orders and generating invoices automatically, reducing
            repetitive hand-entry and associated errors.
          </li>
          <li>
            Integrated a native C++ utility within the Electron/Node
            environment for performance-critical parsing and structured data
            extraction; ship ongoing updates and fixes.
          </li>
        </ul>
      </div>

      {/* Role 2 */}
      <div className="mt-3 print:mt-1.5">
        <p className="text-xs font-semibold">
          Founder — Marketing & Web Operations{" "}
          <span className="font-light text-gray-500">
            | Apr 2019 – Aug 2022
          </span>
        </p>
        <ul className="list-disc list-inside text-xs mt-0.5 space-y-0.5">
          <li>
            Developed and executed paid acquisition strategy and campaigns.
          </li>
          <li>Managed website operations.</li>
        </ul>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="mt-5 print:mt-2">
      <h3 className={sectionHeading}>Education</h3>
      <div className="space-y-1.5 print:space-y-0.5">
        <div>
          <h4 className="text-sm font-semibold tracking-tighter">
            M.S. Applied Computer Science
          </h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">
              Frostburg State University
            </span>{" "}
            – Frostburg, MD — Aug 2022 — GPA 4.0/4.0
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-tighter">MBA</h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">
              Barry University
            </span>{" "}
            – Miami Shores, FL — 2020
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-tighter">
            B.A.S. Supervision & Management
          </h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">
              Miami Dade College (MDC)
            </span>{" "}
            – Miami, FL — 2018
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      name: "Resource Monitor",
      subtitle: "Electron Desktop Utility",
      href: "https://github.com/hmorlive/resource-monitor",
      bullets: [
        "Built a desktop resource monitoring utility with a custom UI and background process for tracking system health metrics.",
        "Implemented a lightweight data collection pipeline and real-time UI updates for a responsive dashboard experience.",
      ],
    },
    {
      name: "Expense Allocator",
      subtitle: "Schedule C Tool",
      href: "https://github.com/hmorlive/transaction-tool",
      bullets: [
        "Created a tool to categorize business expenses and generate export-ready summaries for bookkeeping/tax reporting workflows.",
        "Implemented rule-based categorization and reporting outputs to reduce manual reconciliation effort.",
      ],
    },
    {
      name: "Streamlined Resume",
      subtitle: "1-Page Resume Builder",
      href: "https://github.com/hmorlive/streamlined-resume",
      bullets: [
        "Built a small React app to generate a clean one-page resume layout with reusable sections and print/PDF-friendly formatting.",
        "Focused on simple UX, consistent typography, and export-ready output for quick iteration.",
      ],
    },
  ];

  return (
    <section className="mt-5 print:mt-2">
      <h3 className={sectionHeading}>Projects</h3>
      <div className="space-y-3 print:space-y-1">
        {projects.map((p) => (
          <div key={p.name}>
            <h4 className="text-sm font-semibold tracking-tighter">
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {p.name}
              </Link>{" "}
              <span className="font-light text-gray-500">— {p.subtitle}</span>
            </h4>
            <ul className="list-disc list-inside text-xs mt-0.5 space-y-0.5">
              {p.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
