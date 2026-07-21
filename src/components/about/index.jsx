'use client';
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import BreadCrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import CompanyArea from "./company-area";

const About = () => {
  return (
    <>
      <HeaderFive />
      <BreadCrumbSeven title="About Us" details="Learn more about us and our proposals." />
      <CompanyArea />
      <FooterFive bg_style={false} />
    </>
  );
};

export default About;
