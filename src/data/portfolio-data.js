

// thumb img import here 
import thumb_img_1 from "../../public/assets/img/project/project-inner-1.jpg";
import thumb_img_2 from "../../public/assets/img/project/project-inner-2.jpg";
import thumb_img_3 from "../../public/assets/img/project/project-inner-3.jpg";
import thumb_img_4 from "../../public/assets/img/project/project-inner-5.jpg";
import thumb_img_5 from "../../public/assets/img/project/project-inner-4.jpg";
import thumb_img_6 from "../../public/assets/img/project/project-inner-6.jpg";
import thumb_img_7 from "../../public/assets/img/project/project-inner-7.jpg";
import thumb_img_8 from "../../public/assets/img/project/project-inner-8.jpg";
import thumb_img_9 from "../../public/assets/img/project/project-inner-9.jpg";
// brand logo import here
import brand_logo_1 from "../../public/assets/img/project/project-inner-brand-1.png";
import brand_logo_2 from "../../public/assets/img/project/project-inner-brand-2.png";
import brand_logo_3 from "../../public/assets/img/project/project-inner-brand-3.png";
import brand_logo_4 from "../../public/assets/img/project/project-inner-brand-5.png";
import brand_logo_5 from "../../public/assets/img/project/project-inner-brand-4.png";
import brand_logo_6 from "../../public/assets/img/project/project-inner-brand-6.png";
import brand_logo_7 from "../../public/assets/img/project/project-inner-brand-5.png";
import brand_logo_8 from "../../public/assets/img/project/project-inner-brand-4.png";
import brand_logo_9 from "../../public/assets/img/project/project-inner-brand-6.png";


const portfolio_data = [    
    {
        id: 1,
        thumb_img: thumb_img_1,
        brand_logo: brand_logo_1, 
        job_title: "Design Wok, Branding",
        title: <>Airbnb Upgrade</>,
        des: <>Enterprise messaging platform built for <br /> secure, real-time team communication.</>,
        delay: ".5s",
        category: "Communication",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 
    {
        id: 2,
        thumb_img: thumb_img_2,
        brand_logo: brand_logo_2, 
        job_title: "Development, API",
        title: <>Troth Connect API</>,
        des: <>RESTful API designed for developers <br /> who value reliability and transparency.</>,
        delay: ".5s",
        category: "Integration",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 
    {
        id: 3,
        thumb_img: thumb_img_3,
        brand_logo: brand_logo_3, 
        job_title: "Security, Integration",
        title: <>End-to-End Encryption</>,
        des: <>Military-grade encryption ensuring <br /> every message stays private and secure.</>,
        delay: ".5s",
        category: "Security",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 
    {
        id: 4,
        thumb_img: thumb_img_4,
        brand_logo: brand_logo_4, 
        job_title: "API, Development",
        title: <>Webhook Integrations</>,
        des: <>Real-time webhook events to keep your <br /> systems in sync, always.</>,
        delay: ".5s",
        category: "API",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 
    {
        id: 5,
        thumb_img: thumb_img_5,
        brand_logo: brand_logo_5, 
        job_title: "Communication, API",
        title: <>Video Conferencing</>,
        des: <>HD video calls with end-to-end encryption <br /> built for enterprise reliability.</>,
        delay: ".5s",
        category: "Communication",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 
    {
        id: 6,
        thumb_img: thumb_img_6,
        brand_logo: brand_logo_6, 
        job_title: "API, Integration",
        title: <>SDK & Developer Tools</>,
        des: <>Comprehensive SDKs and tools for <br /> seamless integration into your stack.</>,
        delay: ".5s",
        category: "Development",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 
    {
        id: 7,
        thumb_img: thumb_img_7,
        brand_logo: brand_logo_7, 
        job_title: "Security, Communication",
        title: <>Compliance Suite</>,
        des: <>SOC 2, GDPR, and HIPAA compliant <br /> communication infrastructure.</>,
        delay: ".5s",
        category: "Security",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 
    {
        id: 8,
        thumb_img: thumb_img_8,
        brand_logo: brand_logo_8, 
        job_title: "API, Development",
        title: <>Bot Framework</>,
        des: <>Build custom bots on our trusted <br /> platform with our open framework.</>,
        delay: ".5s",
        category: "API",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 
    {
        id: 9,
        thumb_img: thumb_img_9,
        brand_logo: brand_logo_9, 
        job_title: "Communication, API",
        title: <>Team Collaboration</>,
        des: <>Channels, direct messaging, and file sharing <br /> in one secure workspace.</>,
        delay: ".5s",
        category: "Communication",
        filter_id: ["all", "Communication", "Integration", "Development", "Security", "API" ],
    }, 

    
]
export default portfolio_data