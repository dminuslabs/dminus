"use client";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import ContactFormArea from "./contact-form-area";

const Contact = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix mb-4">
            <BreadcrumbSeven title="Get In Touch" bg_img="/assets/img/contact/contact-banner.jpg">
              <p>We have an experienced team of production and inspection personnel <br /> to ensure quality.</p>
            </BreadcrumbSeven>
            <ContactFormArea />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default Contact;
