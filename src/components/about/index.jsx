'use client';
import AboutArea from "@/common/about-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import CtaArea from "../homes/home-5/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";
 
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
            <AboutArea />
            <TeamArea bg_style={true} />
            <JourneyArea />
            <JobArea />
            <CtaArea />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default About;
