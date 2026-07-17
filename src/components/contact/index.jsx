"use client";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import CtaArea from "../homes/home-5/cta-area";
import OfficeLocation from "./office-location";

const Contact = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <BreadcrumbSeven title="Get In Touch" bg_img="/assets/img/contact/contact-banner.jpg">
              <p>We have an experienced team of production and inspection personnel <br /> to ensure quality.</p>
            </BreadcrumbSeven>
            <OfficeLocation />
            <ContactFormArea />
            <ContactInner />
            <CtaArea />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default Contact;
