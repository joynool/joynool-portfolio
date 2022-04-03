import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

const skills = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "ES6",
  "React",
  "Next.js",
  "TypeScript",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Node",
  "Express",
  "Mongo DB",
  "Mongoose",
  "Firebase",
  "Stripe Payment Gateway",
  "React Testing Library",
  "Git",
  "GitHub",
  "Heroku",
  "Vercel",
  "Netlify",
  "Chrome Dev Tool",
  "Jira software",
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Specialize in those languages, frameworks, and tools.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center wow animate__animated animate__zoomIn">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
