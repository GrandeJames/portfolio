import { Metadata } from "next";
import PageContainer from "../../components/PageContainer";
import { Work } from "./Work";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore the professional journey of James Grande.",
};

export default function Page() {
  return (
    <PageContainer title="WORK">
      <Work />
    </PageContainer>
  );
}
