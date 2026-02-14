import Link from "next/link";
import {
  FaAws,
  FaCss3,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAmazondynamodb, SiMongodb } from "react-icons/si";

export default function AboutSection() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-14">
        <div className="border-t border-zinc-200 pt-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0">
            {/* LEFT: About + highlights */}
            <div className="lg:col-span-7 lg:pr-12">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                About
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Full-stack engineer focused on TypeScript/Node, React/Next.js, and
                AWS serverless. I build production automation and cloud-native
                systems with emphasis on maintainability, clean architecture, and
                reliable delivery.
              </p>

              <ul className="mt-5 space-y-2.5 text-sm text-zinc-700">
                <li className="flex gap-2.5">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>
                    Production Windows desktop system in use since 2023; 5,000+ orders
                    processed.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>
                    Building SiteVertex, a multi-tenant website builder SaaS on AWS.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>
                    Comfortable operating systems end-to-end: CI/CD, deployments,
                    Linux/VPS administration (SSH, firewalls).
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/resume" className="btn-primary">
                  View Resume
                </Link>
                <Link href="mailto:mail@hazmedmoreno.com" className="btn-secondary">
                  Email
                </Link>
              </div>
            </div>

            {/* RIGHT: Experience / Tech / Education / Contact */}
            <div className="lg:col-span-5 lg:border-l lg:border-zinc-200 lg:pl-10">
              <div className="space-y-7">
                {/* Experience */}
                <div>
                  <SidebarHeading>Experience</SidebarHeading>

                  <div className="mt-3 space-y-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold text-zinc-900">
                          Software Engineer (Self-Employed)
                        </span>
                        <span className="shrink-0 text-xs text-zinc-400">
                          Aug 2022 – Present
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-zinc-600">
                        <Link
                          href="https://fullsummit.us"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                        >
                          Full Summit LLC
                          <FaExternalLinkAlt className="text-[10px] text-zinc-400" />
                        </Link>
                        <span className="text-zinc-300">·</span>
                        <span>Miami, FL</span>
                      </div>

                      <p className="text-sm leading-relaxed text-zinc-600">
                        Building and maintaining production software systems and
                        cloud infrastructure.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold text-zinc-900">
                          Founder — Marketing & Web Operations
                        </span>
                        <span className="shrink-0 text-xs text-zinc-400">
                          Apr 2019 – Aug 2022
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-zinc-600">
                        Developed and executed paid acquisition campaigns and managed
                        website operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech */}
                <div>
                  <SidebarHeading>Tech</SidebarHeading>

                  <div className="mt-3 space-y-4 text-sm text-zinc-700">
                    <TechRow
                      label="Frontend"
                      items={[
                        { icon: <FaReact />, name: "React" },
                        { icon: <RiNextjsFill />, name: "Next.js" },
                        { icon: <FaHtml5 />, name: "HTML" },
                        { icon: <FaCss3 />, name: "CSS" },
                        { icon: <FaJs />, name: "JS/TS" },
                      ]}
                    />
                    <TechRow
                      label="Backend"
                      items={[
                        { icon: <FaNodeJs />, name: "Node.js" },
                      ]}
                    />
                    <TechRow
                      label="Datastores"
                      items={[
                        { icon: <SiAmazondynamodb />, name: "DynamoDB" },
                        { icon: <SiMongodb />, name: "MongoDB" },
                      ]}
                    />
                    <TechRow
                      label="Cloud/Infra"
                      items={[
                        { icon: <FaAws />, name: "AWS" },
                        { icon: <FaLinux />, name: "Linux" },
                      ]}
                    />
                  </div>
                </div>

                {/* Education */}
                <div>
                  <SidebarHeading>Education</SidebarHeading>

                  <div className="mt-3 space-y-2.5 text-sm text-zinc-700">
                    <EduItem
                      degree="M.S. Applied Computer Science"
                      school="Frostburg State University"
                      location="Frostburg, MD"
                    />
                    <EduItem
                      degree="MBA"
                      school="Barry University"
                      location="Miami Shores, FL"
                    />
                    <EduItem
                      degree="B.A.S. Supervision & Management"
                      school="Miami Dade College"
                      location="Miami, FL"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <SidebarHeading>Contact</SidebarHeading>

                  <div className="mt-3 space-y-2 text-sm">
                    <ContactLink href="mailto:mail@hazmedmoreno.com" icon={<FaEnvelope />}>
                      mail@hazmedmoreno.com
                    </ContactLink>

                    <ContactLink href="https://github.com/hmorlive" icon={<FaGithub />} external>
                      @hmorlive
                    </ContactLink>

                    <ContactLink href="https://www.linkedin.com/in/hazmed" icon={<FaLinkedin />} external>
                      @hazmed
                    </ContactLink>

                    <Link
                      href="/resume"
                      className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-1 text-sm"
                    >
                      Resume →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Shared Components ─── */

function SidebarHeading({ children }) {
  return (
    <h3 className="text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-2">
      {children}
    </h3>
  );
}

function TechRow({ label, items }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-400">
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span
            key={it.name}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white
                       px-2.5 py-1 text-xs text-zinc-700
                       hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
            title={it.name}
          >
            <span className="text-sm leading-none text-blue-600">{it.icon}</span>
            <span>{it.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function EduItem({ degree, school, location }) {
  return (
    <div className="flex flex-col">
      <span className="font-semibold text-zinc-900">{degree}</span>
      <span className="text-zinc-600">{school}</span>
      <span className="text-xs text-zinc-400">{location}</span>
    </div>
  );
}

function ContactLink({ href, icon, external, children }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 text-zinc-600 hover:text-blue-600 transition-colors"
    >
      <span className="text-blue-600">{icon}</span>
      <span className="truncate">{children}</span>
      {external && <FaExternalLinkAlt className="text-[10px] text-zinc-300" />}
    </Link>
  );
}
