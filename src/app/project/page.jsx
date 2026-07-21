import Wrapper from "@/layouts/wrapper";
import Project from "@/components/project";

export const metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of branding, web development, video production, and event coverage projects. See how Troth Communications helps brands communicate with truth.",
  openGraph: {
    title: "Our Projects | Troth Communications Portfolio",
    description:
      "Browse the Troth Communications portfolio — branding, websites, video production, live event streaming, and corporate media projects that showcase the power of truthful communication.",
  },
};

const ProjectPage = () => {
  return (
    <Wrapper>
      <Project />
    </Wrapper>
  );
};

export default ProjectPage;
