"use client";
import PageContainer from "../../components/PageContainer";
import { work } from "../lib/data";
import { Tools } from "../../components/Tools";
import { Metadata } from "next";
import { motion, Variants } from "framer-motion";

export default function Work() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <PageContainer title="WORK">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="flex flex-wrap gap-10"
      >
        {work.map((job, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <article
              key={index}
              className="max-w-[75ch] bg-gray-500 p-4 md:p-10 bg-opacity-10 flex flex-col gap-4"
            >
              <div className="text-sm">{job.date}</div>
              <div className="">
                <div className="font-semibold">{job.company}</div>
                <div className="italic">{job.title}</div>
              </div>
              <p className="text-gray-700">{job.description}</p>
              <Tools tools={job.tools} />
            </article>
          </motion.div>
        ))}
      </motion.div>
    </PageContainer>
  );
}
