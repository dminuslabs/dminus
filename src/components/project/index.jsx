'use client';
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import Portfolio from "./portfolio";

const Project = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <BreadcrumbSeven
                title="Our Works"
                bg_img="/assets/img/project/project-brdcrmb-bg.jpg"
            >
                <p>We have an experienced team of production and inspection personnel <br /> to ensure quality.</p>
            </BreadcrumbSeven>
            <Portfolio />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default Project;
