import { Metadata } from "next";
import PageContainer from "../../components/PageContainer";
import { Projects } from "./Projects";

// TODO: add meta data
// TODO: fix alt text
// TODO: fix mobile

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <PageContainer title={"PROJECTS"}>
      <Projects />
    </PageContainer>
  );
}
