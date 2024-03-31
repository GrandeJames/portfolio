import { Metadata } from "next";
import PageContainer from "../../components/PageContainer";
import { Projects } from "./Projects";

// TODO: fix alt text
// TODO: fix mobile

export const metadata: Metadata = {
  title: "Projects",
  description: "Dive into the project portfolio of James Grande",
};

export default function Page() {
  return (
    <PageContainer title={"PROJECTS"}>
      <Projects />
    </PageContainer>
  );
}
