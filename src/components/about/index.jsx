'use client';
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import Brand from "./brand";
import CompanyArea from "./company-area";

const About = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <BreadcrumbSeven title="About" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg">
              <p>We have an experienced team of production and inspection personnel <br /> to ensure quality.</p>
            </BreadcrumbSeven>
            <Brand />
            <CompanyArea />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default About;
