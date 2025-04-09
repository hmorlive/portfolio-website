"use client";
import Link from "next/link";
import { useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLanguage,
  FaLinkedin,
  FaPrint,
} from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

export default function Resume() {
  const resumeRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef: resumeRef });

  return (
    <div className="flex flex-col items-center py-10">
      {/* Print Button */}
      <button
        className="fixed top-10 gap-4 items-center justify-between px-6 flex right-10 bg-blue-600 text-white p-2 rounded-md"
        onClick={reactToPrintFn}
      >
        Print <FaPrint />
      </button>
      <div
        className="max-w-5xl px-4 sm:px-16 flex flex-col gap-1 md:shadow-md rounded-md mx-auto bg-white w-full min-h-screen py-6 my-10"
        ref={resumeRef}
      >
        <h1 className="text-xl font-light text-black">Hazmed Moreno</h1>
        <h2 className="text-sm font-normal text-blue-600">
          Technical Analyst | Software Engineer | HIPAA-Aware Healthcare
          Experience
        </h2>
        <ContactSection />
        <SummarySection />
        <SkillsSection />
        <p className="text-xs flex items-center gap-1">
          <FaLanguage className="text-lg" />
          <strong>Bilingual</strong>: English / Spanish
        </p>
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

const SummarySection = () => {
  return (
    <section className="flex flex-col gap-1 mt-2">
      <h3 className="uppercase text-xs">Summary</h3>
      <p className="text-xs font-light">
        Technical professional with a background in software development and
        hands-on experience in HIPAA-compliant healthcare environments. Skilled
        in gathering requirements, analyzing workflows, and delivering
        user-focused systems. Now pursuing a Business Analyst role where I can
        bridge the gap between users and technology—especially in healthcare and
        data-sensitive industries.
      </p>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="flex flex-col gap-1 mt-1">
      <div className="flex flex-col sm:flex-row gap-4 text-sm">
        <Link
          href="mailto:mail@hazmedmoreno.com"
          className="flex gap-1 items-center"
        >
          <FaEnvelope />
          <span>mail@hazmedmoreno.com</span>
        </Link>
        <Link
          href={"https://hazmedmoreno.com"}
          className=" flex gap-1 items-center"
          aria-label="Go to Personal Website"
          target="_blank"
        >
          <FaGlobe />
          hazmedmoreno.com
        </Link>
        <Link
          href={"https://github.com/hmorlive"}
          className=" flex gap-1 items-center"
          aria-label="Go to Github Profile"
          target="_blank"
        >
          <FaGithub />
          @hmorlive
        </Link>
        <Link
          href={"https://www.linkedin.com/in/hazmed"}
          className=" flex gap-1 items-center"
          aria-label="Go to LinkedIn Profile"
          target="_blank"
        >
          <FaLinkedin />
          @hazmed
        </Link>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section className="flex flex-col gap-1 mt-2">
      <h3 className="uppercase text-xs">Skills</h3>
      <ul className="list-disc list-inside text-xs">
        <li>
          <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, PHP
        </li>
        <li>
          <strong>Frontend:</strong> React, Next.js, AngularJS, HTML, CSS,
          TailwindCSS
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express, Electron
        </li>
        <li>
          <strong>Cloud & DevOps:</strong> AWS (Lambda, S3, RDS, DynamoDB,
          etc.), CloudFormation, CDK, Nginx
        </li>
        <li>
          <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, DynamoDB
        </li>
        <li>
          <strong>Infrastructure:</strong> AWS CDK, CloudFormation, SAM
        </li>
        <li>
          <strong>Tools:</strong> Jira, Tableau, Draw.io, Markdown
        </li>
        <li>
          <strong>Other:</strong> Responsive Design, Accessible UI, Security
          Best Practices
        </li>
      </ul>
    </section>
  );
};
const ExperienceSection = () => {
  return (
    <section className="flex flex-col gap-1 mt-2">
      <h3 className="uppercase text-xs">Experience</h3>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold tracking-tighter">
            Founder & Lead Software Engineer{" "}
            <span className="font-light">(Self-Employed)</span>
          </h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">Full Summit LLC</span>{" "}
            – Miami, FL
            <span className="text-xs font-light"> | April 2019 – Present</span>
          </p>
          <ul className="list-disc list-inside text-xs">
            <li>
              <strong>Requirements & Analysis:</strong> Collaborated with
              clients to gather requirements, document workflows, and translate
              business needs into functional specifications.
            </li>
            <li>
              <strong>Full-Stack Development & Architecture:</strong> Designed
              and built end-to-end applications for clients, enhancing business
              processes and operational efficiency.
            </li>
            <li>
              <strong>Productivity Tools:</strong> Led development of internal
              tools that streamlined workflows, boosting productivity and
              reducing redundant processes.
            </li>
            <li>
              <strong>Client Impact:</strong> Engineered tailored software
              solutions that drove measurable improvements in client operations,
              increasing efficiency and meeting project goals ahead of schedule.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold tracking-tighter">
            Patient Access Representative
          </h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">
              Palmetto General Hospital (Connifer Health Solutions)
            </span>{" "}
            - Hialeah, FL
            <span className="text-xs font-light">
              {" "}
              {"  |  "} July 2016 - November 2017
            </span>
          </p>
          <ul className="list-disc list-inside text-xs">
            <li>
              <strong>HIPAA & Data Privacy:</strong> Received formal HIPAA
              training and ensured compliance while handling confidential
              patient data.
            </li>
            <li>
              <strong>Patient Intake & Insurance Verification:</strong> Managed
              scheduling, registration, and verification processes with accuracy
              and professionalism.
            </li>
            <li>
              <strong>Healthcare Workflow Exposure:</strong> Gained hands-on
              experience with clinical and administrative systems, providing
              early insight into healthcare operations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section className="flex flex-col mt-2">
      <h3 className="uppercase text-xs">Education</h3>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold tracking-tighter">
            M.S. Applied Computer Science
          </h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">
              Frostburg State University
            </span>{" "}
            - Frostburg, MD
            <span className="text-xs font-light">
              {" - "} Grad. 2022 - 4.0 GPA
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold tracking-tighter">MBA</h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">
              Barry University
            </span>{" "}
            - Miami Shores, FL
            <span className="text-xs font-light">
              {" - "} Grad. 2020 - 3.95 GPA
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold tracking-tighter">
            B.A.S. Supervision & Management
          </h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">
              Miami Dade College (MDC)
            </span>{" "}
            - Miami, FL
            <span className="text-xs font-light">{" - "} Grad. 2018</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section className="flex flex-col gap-1 mt-2">
      <h3 className="uppercase text-xs">Projects</h3>
      <div className="flex flex-col gap-1">
        {/* Website Builder & Management Platform */}
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold tracking-tighter">
            SiteVertex - Website Builder Platform{" "}
            <span className="font-light">(Founder & Lead Developer)</span>
            <span className="text-xs font-light"> - In Development</span>
          </h4>
          <ul className="list-disc list-inside text-xs">
            <li>
              Architecting a customizable site builder platform for small
              businesses using React, Node.js, and AWS.
            </li>
            <li>
              Designed a serverless infrastructure (Lambda, DynamoDB) for
              scalability and flexibility.
            </li>
            <li>Beta launch planned for 2025.</li>
          </ul>
        </div>

        {/* Order Parsing & Management System */}
        <div className="flex flex-col gap-1 mt-2">
          <h4 className="text-sm font-semibold tracking-tighter">
            Order Parsing & Management System{" "}
            <span className="font-light">(Lead Developer)</span>
            <span className="text-xs font-light"> - Completed</span>
          </h4>
          <ul className="list-disc list-inside text-xs">
            <li>
              Built a desktop invoicing and order management tool for a body
              shop using Electron and Node.js.
            </li>
            <li>
              Extracted data from purchase orders with Tesseract.js; automated
              invoice creation and updates.
            </li>
            <li>Reduced processing time and improved workflow efficiency.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const LanguagesSection = () => {
  return (
    <section className="flex flex-col gap-1 mt-2">
      <h3 className="uppercase text-xs">Languages</h3>
      <ul className="list-disc list-inside text-xs">
        <li>
          <strong>English:</strong> Bilingual
        </li>
        <li>
          <strong>Spanish:</strong> Native
        </li>
      </ul>
    </section>
  );
};
