import Page from "../ui/Section";
import { projects } from "../lib/data";
import { Tools } from "../ui/Tools";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "James Grande | Projects",
  description: "James Grande's projects.",
};

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageSrc?: string;
}

export default function Projects() {
  const ProjectCard = ({
    title,
    description,
    tools,
    imageSrc,
  }: ProjectCardProps) => (
    <div className="flex flex-col p-4 md:p-10 relative rounded-3xl overflow-hidden w-[500px] h-[500px] justify-end">
      {imageSrc && (
        <Image
          alt="Project Image"
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      <div className="z-10 text-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="my-4 max-w-[50ch] text-gray-300">{description}</p>
        <Tools tools={tools} />
      </div>
    </div>
  );

  return (
    <Page title={"PROJECTS"}>
      <div className="flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard
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
