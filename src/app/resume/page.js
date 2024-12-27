"use client";
import Link from "next/link";
import { useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
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
      <button className="fixed top-10 gap-4 items-center justify-between px-6 flex right-10 bg-blue-600 text-white p-2 rounded-md" onClick={reactToPrintFn}>
        Print <FaPrint />
        </button>
      <div className="max-w-5xl px-4 sm:px-16 flex flex-col gap-1 md:shadow-md rounded-md mx-auto bg-white w-full min-h-screen py-6 my-10" ref={resumeRef}>
        <h1 className="text-xl font-light text-black">Hazmed Moreno</h1>
        <h2 className="text-sm font-normal text-blue-600">Software Engineer</h2>
        <ContactSection />
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

const ContactSection = () => {
  return (
    <section className="flex flex-col gap-1 mt-2">
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
          <strong>Programming Languages:</strong> JavaScript (ES6+), TypeScript,
          Python, PHP
        </li>
        <li>
          <strong>Frontend Development:</strong> React, Next.js, AngularJS,
          HTML, CSS, TailwindCSS
        </li>
        <li>
          <strong>Backend Development:</strong> Node.js, Express, Electron
        </li>
        <li>
          <strong>Cloud & DevOps:</strong> AWS (Lambda, EC2, S3, RDS, DynamoDB,
          CloudFront, CodeBuild), CloudFormation, CDK, Nginx, Apache2
        </li>
        <li>
          <strong>Databases:</strong> MongoDB, DynamoDB, PostgreSQL, MySQL,
          MariaDB
        </li>
        <li>
          <strong>Infrastructure as Code:</strong> AWS CDK, CloudFormation, AWS
          SAM
        </li>
        <li>
          <strong>Testing:</strong> Jest
        </li>
        <li>
          <strong>Other:</strong> Responsive Design, Accessible Design, Security
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
            - Miami, FL
            <span className="text-xs font-light"> {"  |  "} April 2019 - Present</span>
          </p>
          <ul className="list-disc list-inside text-xs">
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
            <span className="text-blue-600 font-semibold">Frostburg State University</span>{" "}
            - Frostburg, MD<span className="text-xs font-light">{" - "} Grad. 2022 - 4.0 GPA</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold tracking-tighter">
            MBA
          </h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">Barry University</span>{" "}
            - Miami Shores, FL<span className="text-xs font-light">{" - "} Grad. 2020 - 3.95 GPA</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold tracking-tighter">
            B.A.S. Supervision & Management
          </h4>
          <p className="text-xs font-light">
            <span className="text-blue-600 font-semibold">Miami Dade College (MDC)</span>{" "}
            - Miami, FL<span className="text-xs font-light">{" - "} Grad. 2018</span>
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
            SiteVertex - Website Builder & Management Platform{" "}
            <span className="font-light">(Founder & Lead Developer)</span>
            <span className="text-xs font-light"> {"  - In Development"}</span>
          </h4>
          <ul className="list-disc list-inside text-xs">
            <li>
              <strong>Overview:</strong> Architecting a customizable platform
              for small businesses to create and manage websites with minimal
              technical knowledge.
            </li>
            <li>
              <strong>Technologies:</strong> React, Node.js, AWS (Lambda,
              DynamoDB)
            </li>
            <li>
              <strong>Status:</strong> Core features nearing completion; beta
              launch planned for early 2025.
            </li>
            <li>
              <strong>Challenges:</strong> Developed a system that supports
              extensive customization and component nesting, ensuring
              flexibility for end-users.
            </li>
            <li>
              <strong>Solutions:</strong> Implemented a serverless architecture
              on AWS, optimizing for scalability and efficiency.
            </li>
            <li>
              <strong>Goals:</strong> Aiming to onboard 1,000 small business
              users in the first year, with plans for e-commerce expansion.
            </li>
          </ul>
        </div>

        {/* Order Parsing & Management System */}
        <div className="flex flex-col gap-1 mt-2">
          <h4 className="text-sm font-semibold tracking-tighter">
            Order Parsing & Management System{" "}
            <span className="font-light">(Lead Developer)</span>
            <span className="text-xs font-light"> {"  - Completed Project"}</span>
          </h4>
          <ul className="list-disc list-inside text-xs">
            <li>
              <strong>Overview:</strong> Developed an Electron-based desktop
              application to automate invoicing and order management for a body
              shop, reducing manual work and errors.
            </li>
            <li>
              <strong>Technologies:</strong> Electron, Node.js, AngularJS,
              Tesseract.js, MongoDB
            </li>
            <li>
              <strong>Parsing System:</strong> Built a PDF parsing tool using
              Tesseract.js to extract data from Purchase Orders (POs) and create
              invoices automatically.
            </li>
            <li>
              <strong>Invoice Management:</strong> Automated the creation and
              updating of invoices, minimizing manual input and improving
              accuracy.
            </li>
            <li>
              <strong>Impact:</strong> Streamlined the shop’s workflow,
              significantly reducing processing time and increasing overall
              efficiency.
            </li>
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

const ReferenceSection = () => {
  return (
    <section className="flex flex-col gap-1 mt-2 text-xs">
      <h3 className="uppercase text-xs">References</h3>
      <p>Available upon request</p>
    </section>
  );
};
