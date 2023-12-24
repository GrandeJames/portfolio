import Link from "next/link";
import { projects, work } from "./lib/data";
import Header from "./ui/Header";
import Section from "./ui/Section";
import { Tools } from "./ui/Tools";
interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
}

export default function Home() {
  const ProjectCard = ({ title, description, tools }: ProjectCardProps) => (
    <article className="flex flex-col p-4 md:p-10 bg-gray-500 h-fit w-full lg:w-fit bg-opacity-10">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="my-4 max-w-[50ch]">{description}</p>
      <Tools tools={tools} />
    </article>
  );

  return (
    <div className="flex min-h-screen flex-col px-7 md:px-20 lg:px-24">
      <Header />
      <main>
        <Section title={"PROJECTS"}>
          <div className="flex flex-wrap gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                title={project.title}
                description={project.description}
                tools={project.tools}
                key={index}
              />
            ))}
          </div>
        </Section>
        <Section title="WORK">
          {work.map((job, index) => (
            <article
              key={index}
              className="max-w-[75ch] bg-gray-500 p-4 md:p-10 bg-opacity-10 flex flex-col gap-4"
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
        </Section>
      </main>
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
    </div>
  );
}
