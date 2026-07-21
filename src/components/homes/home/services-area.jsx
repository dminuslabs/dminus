import useTitleAnimation from '@/hooks/useTitleAnimation';
import service_data from '@/data/service-data';
import RightArrow from '@/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

const service_content = {
    title: "Explore Our Services",
    sub_title: <>More than 10 companies trust and work with us to jump start their businesses.</>,
    bg_img: "/assets/img/service/sv-bg.jpg",
    title_2: <>Creative & Media Services </>,
    des: <>End-to-end solutions that includes company profile, print media and event coverage.</>,
    btn_text: "Work with Us",
}

const {title, sub_title,bg_img, title_2, des, btn_text}  = service_content

const ServicesArea = () => {
    let titleRef = useRef(null)

   useTitleAnimation(titleRef)
    return (
        <>
            <div className="tp-service__area p-relative fix mt-50">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div ref={titleRef} className="tp-service__section-box  mb-50 text-center">
                           <h2 className="tp-section-title" >{title}</h2>
                           <p>{sub_title}</p>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                    {service_data.slice(0,5).map((item, i)  =>
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                            <div className="tp-service__item mb-30">
                                <div className="tp-service__icon">
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                                <div className="tp-service__content">
                                    <h3 className="tp-service__title-sm tp-yellow-color"><Link href="/service-details">{item.title}</Link></h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="tp-service__link">
                                    <Link href="/service-details">
                                        <RightArrow />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                     <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                        <div className="tp-service__dashboard pb-30 pt-5"
                        style={{backgroundImage: `url(${bg_img})`}} >
                           <div className="tp-service__top-content mt-5">
                              <h3 className="tp-service__title-white">{title_2}</h3>
                              <p>{des}</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/contact">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
        </>
    );
};

export default ServicesArea;
