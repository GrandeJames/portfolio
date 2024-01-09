import Page from "../ui/Section";
import { projects } from "../lib/data";
import { Tools } from "../ui/Tools";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | James Grande",
  description: "James Grande's projects",
};

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageSrc?: string;
  githubLink?: string;
  websiteLink?: string;
}

export default function Projects() {
  const ProjectCard = ({
    title,
    description,
    tools,
    imageSrc,
    githubLink,
    websiteLink,
  }: ProjectCardProps) => (
    <div className="flex flex-col p-4 md:p-10 relative rounded-3xl overflow-hidden w-[500px] h-[550px] justify-end">
      {imageSrc && (
        <Image
          alt="Project Image"
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      <div className="z-10 text-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="my-4 max-w-[50ch] text-gray-300">{description}</p>
        <div className="flex gap-10 my-3 font-medium">
          {githubLink && (
            <Link href={githubLink} className="flex gap-1">
              GitHub{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          )}
          {websiteLink && (
            <Link href={websiteLink} className="flex gap-1">
              Website{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>
        <Tools tools={tools} />
      </div>
    </div>
  );

  return (
    <Page title={"PROJECTS"}>
      <div className="flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            websiteLink={project.websiteLink}
            githubLink={project.githubLink}
            title={project.title}
            description={project.description}
            tools={project.tools}
            imageSrc={project.imageSrc}
            key={index}
          />
        ))}
      </div>
    </Page>
  );
}
