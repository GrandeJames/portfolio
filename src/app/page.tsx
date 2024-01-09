"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./icons/linkedIn-icon";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="my-12 text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        JAMES
      </motion.h1>

      <div className="overflow-hidden">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-gray-800 mb-5 max-w-[50ch] text-center">
            👋 Hi, I&apos;m a full-stack developer and a Computer Science
            student at the University of Hawai&lsquo;i at Mānoa. I am passionate
            about creating maintainable and scalable software solutions that
            customers love.
          </p>
          <div className="m-3 text-center">
            Email:{" "}
            <a href="mailto:james.grande6@gmail.com" className="underline">
              james.grande6@gmail.com
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
    </div>
  );
}
