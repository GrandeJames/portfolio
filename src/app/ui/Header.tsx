"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "../icons/linkedIn-icon";

const scrollToRefSmoothly = (ref: any) => {
  console.log(ref);
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
};

export default function Header({
  projectsRef,
  workRef,
}: {
  projectsRef: any;
  workRef: any;
}) {
  return (
    <header className="flex flex-col items-center h-[90vh] justify-center mb-20">
      <div className="overflow-hidden">
        <motion.nav
          className="flex justify-center gap-6 text-gray-500"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => scrollToRefSmoothly(projectsRef)}>
            projects
          </button>
          <button onClick={() => scrollToRefSmoothly(workRef)}>work</button>
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
            👋 Hi, I&apos;m a fullstack developer and a Computer Science student
            at the University of Hawai&lsquo;i at Mānoa. I expect to graduate
            with a bachelor of science in Fall 2024.
          </p>

          <div className="mb-2">
            Email:{" "}
            <a href="mailto:jlgrande@hawaii.edu" className="underline">
              jlgrande@hawaii.edu
            </a>
          </div>
          <div className="flex gap-5">
            <Link href={"https://www.linkedin.com/in/jlag6/"}>
              <LinkedinIcon />
            </Link>
            <Link href={"https://github.com/GrandeJames"}>
              <GithubIcon />
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
