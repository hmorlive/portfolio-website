import {
  FaAngular,
  FaAws,
  FaCheck,
  FaCss3,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaTimes,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAmazondynamodb,
  SiMariadb,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-10 w-full bg-white mx-auto flex flex-col">
      <div className="container w-full mx-auto flex p-4 flex-col 2xl:flex-row justify-around flex-wrap gap-6">
        <div className="flex flex-col gap-2">
          <h2>About Me</h2>
          <p>Hi, I&apos;m Haz.</p>
          <p>I like building software.</p>
          <div className="w-[200px] max-w-[90vw] text-xs gap-2 py-2 px-4 border">
            <span className="text-red-700 flex gap-2 items-center">
              <FaTimes />
              <span className="text-zinc-600">Error at line 1.</span>
            </span>
          </div>
          <div className="w-[200px] max-w-[90vw] py-2 px-4 border">
            <span className="text-xs text-green-700 flex gap-2 items-center">
              <FaCheck />
              <span className="text-zinc-600">Build successful.</span>
            </span>
          </div>
          <p>
            Software that <b>works</b>.
          </p>
          <p>
            Software that <b>makes life easier</b>.
          </p>
          <p>
            Software that is <b>automated</b>.
          </p>
          <p>
            Software that <b>performs</b>.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h2>Experience</h2>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="font-bold">
              Founder & Lead Software Engineer{" "}
              <span className="font-light">- since 2019</span>
            </span>
            <span className="flex gap-1 text-sm">
              <Link
                href={"https://fullsummit.us"}
                target="_blank"
                className="text-blue-600 font-normal flex items-center justify-center gap-1"
              >
                Full Summit{" "}
                <FaExternalLinkAlt className="text-xs text-gray-500" />
              </Link>
              <span className="font-light not-italic">
                - Peak Performing Software
              </span>
            </span>
            <div className="gap-0 flex flex-col">
              <span>Miami, FL</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h2>Tech</h2>
          <div className="flex flex-col">
            <h3>Frontend</h3>
            <div className="flex gap-1 items-center">
              <FaHtml5 />
              <FaCss3 />
              <FaReact />
              <FaAngular />
              <RiNextjsFill />
              <FaJs />
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Backend</h3>
            <div className="flex gap-2 items-center">
              <FaNodeJs />
              <FaPhp />
              <FaPython />
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Databases</h3>
            <div className="flex gap-2 items-center">
              <SiAmazondynamodb />
              <SiMongodb />
              <SiMysql />
              <SiMariadb />
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Cloud</h3>
            <div className="flex gap-2 items-center">
              <FaAws />
              <FaLinux />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h2>Education</h2>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="font-bold">MS Applied Computer Science </span>
            <div className="gap-0 flex flex-col">
              <span className="italic">Frosburg State University</span>
              <span>Frostburg, MD</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="font-bold">MBA</span>
            <div className="gap-0 flex flex-col">
              <span className="italic">Barry University</span>
              <span>Miami Shores, FL</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="font-bold">BAS Supervision & Management</span>
            <div className="gap-0 flex flex-col">
              <span className="italic">Miami Dade College</span>
              <span>Miami, FL</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h2>Contact</h2>
          <div className="flex gap-2 items-center">
            <FaEnvelope />
            <span>mail@hazmedmoreno.com</span>
          </div>
          <Link
            href={"https://github.com/hmorlive"}
            className=" flex gap-2 items-center"
            aria-label="Go to Github Profile"
            target="_blank"
          >
            <FaGithub />
            @hmorlive
            <FaExternalLinkAlt className="text-xs text-gray-500" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/hazmed"}
            className=" flex gap-2 items-center"
            aria-label="Go to LinkedIn Profile"
            target="_blank"
          >
            <FaLinkedin />
            @hazmed
            <FaExternalLinkAlt className="text-xs text-gray-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
