import {
  faAngular,
  faAws,
  faCss3,
  faGithub,
  faHtml5,
  faJava,
  faNode,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faEnvelope,
  faExternalLink,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-10 w-full bg-white mx-auto flex flex-col">
      <div className="container w-full mx-auto flex p-4 flex-col 2xl:flex-row justify-around flex-wrap gap-6">
        <div className="flex flex-col gap-2">
          <h2>About Me</h2>
          <p>Hi, I'm Haz.</p>
          <p>I like building stuff.</p>
          <div className="w-[200px] max-w-[90vw] text-xs gap-2 py-2 px-4 border">
            <span className="text-red-700 flex gap-2 items-center">
              <FontAwesomeIcon icon={faTimes} />
              <span className="text-zinc-600">Error at line 1.</span>
            </span>
          </div>
          <div className="w-[200px] max-w-[90vw] py-2 px-4 border">
            <span className="text-xs text-green-700 flex gap-2 items-center">
              <FontAwesomeIcon icon={faCheck} />
              <span className="text-zinc-600">Build successful.</span>
            </span>
          </div>
          <p>Stuff that <b>works</b>.</p>
          <p>Stuff that <b>makes my life easier</b>.</p>
          <p>Stuff that is <b>automated</b>.</p>
          <p>Stuff that is <b>peak-performing</b>.</p>
          <p>Stuff that is <b>accessible.</b></p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h2>Experience</h2>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="font-bold">
              Founder & Lead Software Engineer{" "}
              <span className="font-light">- since 2019</span>
            </span>
            <span>
              <Link href={"https://fullsummit.us"} target="_blank" className="text-blue-600">
                Full Summit <FontAwesomeIcon icon={faExternalLink} />{" "}
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
              <FontAwesomeIcon icon={faHtml5} className="text-black" />
              <FontAwesomeIcon icon={faCss3} className="text-black" />
              <FontAwesomeIcon icon={faReact} className="text-black" />
              <FontAwesomeIcon icon={faAngular} className="text-black" />
              <span>NextJS</span>
              <span>VanillaJS</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Backend</h3>
            <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faNodeJs} className="text-black" />
            <FontAwesomeIcon icon={faPhp} className="text-black" />
            <FontAwesomeIcon icon={faPython} className="text-black" />
            <FontAwesomeIcon icon={faJava} className="text-black" />
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Databases</h3>
            <div className="flex gap-2 items-center">
              <span>DynamoDB</span>
              <span>MongoDB</span>
              <span>OracleSQL</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Cloud</h3>
            <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faAws} className="text-black" />
              <span>Linux Servers</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h2>Education</h2>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="font-bold">
              MS Applied Computer Science{" "}
              <span className="font-light">- 2022</span>
            </span>
            <div className="gap-0 flex flex-col">
              <span className="italic">Frosburg State University</span>
              <span>Frostburg, MD</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="font-bold">
              MBA <span className="font-light">- 2020</span>
            </span>
            <div className="gap-0 flex flex-col">
              <span className="italic">Barry University</span>
              <span>Miami Shores, FL</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="font-bold">
              BAS Supervision & Management <span className="font-light">- 2018</span>
            </span>
            <div className="gap-0 flex flex-col">
              <span className="italic">Miami Dade College</span>
              <span>Miami, FL</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h2>Contact</h2>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-black" />
            <span>mail@hazmedmoreno.com</span>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-black" />
            <span>hmor@fullsummit.us</span>
          </div>
          <Link
            href={"https://github.com/hmorlive"}
            className=" flex gap-2 items-center"
            aria-label="Go to Github Profile"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="text-black" />
            @hmorlive
            <FontAwesomeIcon
              icon={faExternalLink}
              className="text-blue-600 text-sm"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
