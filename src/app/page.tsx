import Link from "next/link";
import { projects } from "./lib/data";
import Header from "./ui/Header";
interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
}

const Tool = ({ name }: { name: string }) => (
  <span className="text-sm px-4 py-1 border border-black">{name}</span>
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
    <article className="flex flex-col p-4 md:p-10 bg-gray-500 h-fit w-full lg:w-fit bg-opacity-10">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="my-4 max-w-[50ch]">{description}</p>
      <Tools tools={tools} />
    </article>
  );

  return (
    <div className="flex min-h-screen flex-col px-7 md:px-20 lg:px-24">
      <Header />

      <section id="projects" className="mb-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-5">
          PROJECTS
        </h2>
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
      </section>
      <section id="work" className="my-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-5">
          WORK
        </h2>
        <article className="max-w-[75ch] bg-gray-500 p-4 md:p-10 bg-opacity-10 flex flex-col gap-4">
          <div className="text-sm">July 2023 - Present</div>
          <div className="">
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
    </div>
  );
}
