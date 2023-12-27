import Page from "../ui/Section";
import { projects } from "../lib/data";
import { Tools } from "../ui/Tools";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
}

export default function Projects() {
  const ProjectCard = ({ title, description, tools }: ProjectCardProps) => (
    <div className="flex flex-col p-4 md:p-10 bg-gray-500 bg-opacity-10 w-auto">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="my-4 max-w-[50ch]">{description}</p>
      <Tools tools={tools} />
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
            key={index}
          />
        ))}
      </div>
    </Page>
  );
}
