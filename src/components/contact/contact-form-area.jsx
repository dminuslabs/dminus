import ContactUsForm from '@/forms/contact-us-form';
import Link from 'next/link';
import React from 'react';

import EmailIcon from '@/svg/email';
import PhoneIcon from '@/svg/phone-icon';
import LocationIcon from '@/svg/location-icon';


const contact_content  = {
    sub_title: "CONTACT US",
    tilte: <>We'd love to hear from you.</>,
    info: <> Whether you have a specific inquiry or simply want to explore how we can collaborate, we would love to hear from you.</>,

    contact_info: [
        {
            id: 2,
            icon: PhoneIcon,
            title: "+251 963 058 981",
            link: "tel:+251963058981",
        },
        {
            id: 1,
            icon: EmailIcon,
            title: "contact@troth.digital",
            link: "mailto:contact@troth.digital",
        },
        {
            id: 3,
            icon: LocationIcon,
            title: "Addis Ababa, ETH",
            link: "https://maps.app.goo.gl/kd5wjKAJk9H7mc1J8",
            external: true,
        },
    ],

    status: "Average response time: 2 hrs",
}
const {sub_title, tilte, info, contact_info, status}  =  contact_content


const ContactFormArea = () => {
    return (
        <>
            <div className="contact-form-area pb-120 mt-100">
               <div className="container">
                  <div className="row gx-0">
                     <div className="col-xl-5 col-lg-6">
                        <div className="contact-form-left">
                           <div className="contact-form-section-box pb-50">
                              <h5 className="inner-section-subtitle">{sub_title}</h5>
                              <h4 className="tp-section-title pb-10">{tilte}</h4>
                              <p>{info}</p>
                           </div>
                           <div className="contact-form-social-box p-relative">
                              <div className="contact-form-info-wrap pb-20">
                                  {contact_info.map((item) => (
                                     <div key={item.id} className="contact-form-info-item d-flex align-items-center mb-10">
                                        <span className="contact-form-info-icon mr-10"><item.icon /></span>
                                        <Link href={item.link} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{item.title}</Link>
                                     </div>
                                  ))}
                              </div>
                              <div className="contact-form-status pb-20 d-flex align-items-center">
                                 <span className="status-dot" />
                                 <span className="status-text">{status}</span>
                              </div>
                              <div className="contact-form-social-item">
                                 <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                 <Link href="#"><i className="fab fa-twitter"></i></Link>
                                 <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                 <Link href="#"><i className="fab fa-instagram"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-6">
                        <div className="contact-form-right-warp">
                           <div className="postbox__comment-form">
                            <ContactUsForm />
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
        </>
    );
};

export default ContactFormArea;
