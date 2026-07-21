'use client';
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import Portfolio from "./portfolio";

const Project = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <BreadcrumbSeven title="Projects" details="We have serveral projects that we have worked on for our clients in the past." />
        <Portfolio />
      </main>
      <FooterFive bg_style={false} />
    </>
  );
};

export default Project;
