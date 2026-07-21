import Link from 'next/link';
import React from 'react';

const business_content = {
    bg_img: "/assets/img/cta/cta-bg-5-1.png",
    sub_title: "Full-Service Creative Agency",
    title: <>Supercharge Your Growing <br /> <span>Brand With Us</span> </>,
    btn_text: "Get Started Now"

}
const {bg_img, sub_title, title, btn_text}  = business_content
const BusinessBox = () => {
    return (
        <>
        <div className="tp-cta-area pt-120 pb-120 mb-120 tp-cta-five-bg p-relative" style={{backgroundImage: `url(${bg_img})`}}>
                  <div className="container-fluid g-0">
                     <div className="row g-0">
                        <div className="col-12">
                           <div className="tp-cta-five-section-box text-center">
                              <span className="tp-section-subtitle-5">{sub_title}</span>
                              <h3 className="tp-section-title-5 pb-30">{title}</h3>
                              <div className="tp-cta-five-btn">
                                 <Link className="tp-btn-yellow-lg circle-effect" href="/contact">{btn_text}</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </>
    );
};

export default BusinessBox;
