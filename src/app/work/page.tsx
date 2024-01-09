import Page from "../ui/Section";
import { work } from "../lib/data";
import { Tools } from "../ui/Tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | James Grande",
  description: "James Grande's work",
};

export default function Work() {
  return (
    <Page title="WORK">
      {work.map((job, index) => (
        <article
          key={index}
          className="max-w-[75ch] bg-gray-500 p-4 md:p-10 bg-opacity-10 flex flex-col gap-4 rounded-3xl"
        >
          <div className="text-sm">{job.date}</div>
          <div className="">
            <div className="font-semibold">{job.company}</div>
            <div className="italic">{job.title}</div>
          </div>
          <p>{job.description}</p>
          <Tools tools={job.tools} />
        </article>
      ))}
    </Page>
  );
}
