import Link from "next/link";
import { Tools } from "../../../components/Tools";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageSrc?: string;
  githubLink?: string;
  websiteLink?: string;
}

export const ProjectCard = ({
  title,
  description,
  tools,
  imageSrc,
  githubLink,
  websiteLink,
}: ProjectCardProps) => (
  <div className="flex flex-col p-4 md:p-10 relative overflow-hidden w-[500px] h-[550px] justify-end">
    {imageSrc && (
      <Image
        alt="Project Image"
        src={imageSrc}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
        quality={100}
      />
    )}
    <div className="absolute inset-0 bg-black opacity-5"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

    <div className="z-10 text-white">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="my-4 max-w-[50ch] text-gray-300">{description}</p>
      <div className="flex gap-10 my-3 font-medium">
        {githubLink && (
          <Link href={githubLink} target="_blank" className="flex gap-1">
            GitHub{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
        {websiteLink && (
          <Link href={websiteLink} target="_blank" className="flex gap-1">
            Website{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
      </div>
      <Tools tools={tools} />
    </div>
  </div>
);
