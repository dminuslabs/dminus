"use client";
import FooterFive from "@/layout/footers/footer-5";
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import HeaderFive from "@/layout/headers/header-5";
import ContactFormArea from "./contact-form-area";

const Contact = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbSeven title="Contact Us" details="Get in touch with us and lets see how our experts can jumpstart or transform your business" />
            <ContactFormArea />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default Contact;
