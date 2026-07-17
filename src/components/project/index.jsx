'use client';
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import CtaArea from "../homes/home-5/cta-area";
import Portfolio from "./portfolio";

const Project = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <BreadcrumbSeven />
            <Portfolio />
            <CtaArea />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default Project;
