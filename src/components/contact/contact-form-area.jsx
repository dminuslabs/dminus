import { Globe, MessageCircle, Briefcase, Camera } from 'lucide-react';
import ContactUsForm from '@/forms/contact-us-form';
import Link from 'next/link';
import React from 'react';

const contact_content  = {
    sub_title: "CONTACT US",
    tilte: <>We&apos;d love to <br /> hear From you.</>,
    info: <>Ready to build on trust? Reach out and let&apos;s <br /> start a conversation.</> ,

}
const {sub_title, tilte, info}  =  contact_content

const ContactFormArea = () => {
    return (
        <>
            <div className="contact-form-area pt-120 pb-120">
               <div className="container">
                  <div className="row gx-0">
                     <div className="col-xl-5 col-lg-6">
                        <div className="contact-form-left">
                           <div className="contact-form-section-box pb-80">
                              <h5 className="inner-section-subtitle">{sub_title}</h5>
                              <h4 className="tp-section-title pb-10">{tilte}</h4>
                              <p>{info}</p>
                           </div>
                           <div className="contact-form-social-box p-relative">
                              <div className="d-flex flex-row align-items-center contact-form-social-item">
                                  <Link href="#" className="d-flex align-items-center justify-content-center"><Globe size={16} /> </Link>
                                  <Link href="#" className="d-flex align-items-center justify-content-center"><MessageCircle size={16} /> </Link>
                                  <Link href="#" className="d-flex align-items-center justify-content-center"><Briefcase size={16} /> </Link>
                                  <Link href="#" className="d-flex align-items-center justify-content-center"><Camera size={16} /> </Link>
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
