
import thumb_img_1 from "../../public/assets/img/project/project-inner-1.jpg";
import thumb_img_2 from "../../public/assets/img/project/project-inner-2.jpg";
import thumb_img_3 from "../../public/assets/img/project/project-inner-3.jpg";
import thumb_img_4 from "../../public/assets/img/project/project-inner-5.jpg";
import brand_logo_1 from "../../public/assets/img/project/project-inner-brand-1.png";
import brand_logo_2 from "../../public/assets/img/project/project-inner-brand-2.png";
import brand_logo_3 from "../../public/assets/img/project/project-inner-brand-3.png";
import brand_logo_4 from "../../public/assets/img/project/project-inner-brand-5.png";


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
];
export default portfolio_data
