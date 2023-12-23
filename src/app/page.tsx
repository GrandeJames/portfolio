"use client";

import Link from "next/link";
import { motion } from "framer-motion";
interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
}

const Tool = ({ name }: { name: string }) => (
  <span className="text-sm px-4 py-1 bg-gray-200">{name}</span>
);

const Tools = ({ tools }: { tools: string[] }) => (
  <div className="flex flex-wrap gap-3">
    {tools.map((tool, index) => (
      <Tool name={tool} key={index} />
    ))}
  </div>
);

export default function Home() {
  const ProjectCard = ({ title, description, tools }: ProjectCardProps) => (
    <article className="flex flex-col p-4 md:p-10 bg-gray-100 h-fit w-full lg:w-fit">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="my-4 max-w-[50ch]">{description}</p>
      <Tools tools={tools} />
    </article>
  );

  return (
    <div className="flex min-h-screen flex-col px-7 md:px-20 lg:px-24">
      <header className="flex flex-col items-center h-[100vh] justify-center">
        <div className="overflow-hidden">
          <motion.nav
            className="flex justify-center gap-6 text-gray-500"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, color: "#000" }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <a href="#work">work</a>
            </motion.div>
            <a href="#projects" className="">
              projects
            </a>
            <a href="#contact" className="">
              contact
            </a>
          </motion.nav>
        </div>

        <motion.h1
          className="my-12 text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          JAMES
        </motion.h1>

        <div className="overflow-hidden">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-800 mb-5 max-w-xl text-center">
              👋 Hi, I&apos;m a fullstack developer and a Computer Science
              student at the University of Hawai&lsquo;i at Mānoa. I expect to
              graduate with a bachelor of science in Fall 2024.
            </p>

            <div className="mb-2">
              Email:{" "}
              <a href="mailto:jlgrande@hawaii.edu" className="underline">
                jlgrande@hawaii.edu
              </a>
            </div>
            <div className="flex gap-5">
              <Link href={"https://www.linkedin.com/in/jlag6/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </Link>
              <Link href={"https://github.com/GrandeJames"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="projects" className="mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-5">
            PROJECTS
          </h2>
          <div className="flex flex-wrap gap-10">
            <ProjectCard
              title="fo. focus"
              description="Currently building!"
              tools={["Next.js", "TailwindCSS", "Typescript"]}
            />
            <ProjectCard
              title="grandejames.com"
              description="This website!"
              tools={["Next.js", "TailwindCSS", "Typescript"]}
            />
            <ProjectCard
              title="Makai"
              description="3rd place at the 2023 Hawaii Annual Code Challenge. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum."
              tools={["JavaScript", "Next.js", "MongoDB", "TailwindCSS"]}
            />
            <ProjectCard
              title="Office Space Manager"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum."
              tools={["JavaScript", "React", "Bootstrap", "Meteor"]}
            />
          </div>
        </section>
        <section id="work" className="my-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-5">
            WORK
          </h2>
          <article className="max-w-[75ch] bg-gray-100 p-4 md:p-10">
            <div className="text-sm">July 2023 - Present</div>
            <div className="my-3">
              <div className="font-semibold">VolunteerAlly</div>
              <div className="italic">Software Developer Intern</div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              dolore qui ad maiores laboriosam doloremque minus, eveniet,
              doloribus neque, distinctio id. Perspiciatis perferendis animi
              deserunt rerum velit ducimus reiciendis laborum!
            </p>
            <Tools
              tools={[
                "Typescript",
                "Next.js",
                "React",
                "CSS",
                "TailwindCSS",
                "Bootstrap",
              ]}
            />
          </article>
        </section>
        <footer className="flex flex-col items-center my-32 gap-8">
          <div className="text-2xl md:text-4xl font-semibold">
            Stay in touch! ❤️
          </div>
          <Link
            href={""}
            className="border font-bold px-10 py-4 bg-gray-800 text-gray-50 tracking-widest"
          >
            CONTACT ME
          </Link>
        </footer>
      </motion.main>
    </div>
  );
}
