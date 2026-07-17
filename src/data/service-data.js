import { Briefcase, TrendingUp, FileText, Eye, Grid, Shield, Megaphone } from 'lucide-react'

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/sv-icon-5-1.png";
import img_7 from "../../public/assets/img/service/sv-icon-5-2.png";
import img_8 from "../../public/assets/img/service/sv-icon-5-3.png";
import img_9 from "../../public/assets/img/service/sv-icon-5-4.png";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";




const  service_data = [
    // for home 01 
    {
        id: 1,
        icon: img_1,
        img: img_1,
        title: "AI Data Analysis",
        description: <>Harness AI to uncover insights <br /> and drive smarter decisions.</>,
        delay: ".4s",
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        title: "Machine Learning",
        description: <>Intelligent models that adapt <br /> and improve with every interaction.</>,
        delay: ".6s",
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        title: "Data Visualization",
        description: <>Turn complex data into clear, <br /> actionable visual stories.</>,
        delay: ".7s",
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        title: "Business Intelligence",
        description: <>Empower your team with real-time <br /> analytics and reporting tools.</>,
        delay: ".8s",
    },
    {
        id: 5,
        icon: img_5,
        img: img_5,
        title: "Artificial Intelligence",
        description: <>Next-generation AI solutions built <br /> on transparency and trust.</>,
        delay: ".9s",
    },

    // for home 03
    {
        id: 6,
        icon: <Briefcase size={40} />,
        img: <Briefcase size={40} />,
        title: "Project Management",
        description: <>Automate workflows <br /> and collaborate in real time.</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <TrendingUp size={40} />,
        img: <TrendingUp size={40} />,
        title: "Sales analytics",
        description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <FileText size={40} />,
        img: <FileText size={40} />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 9,
        icon: <Eye size={40} />,
        img: <Eye size={40} />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    // for home 04
    {
        id: 10,
        icon: icon_1,
        img: icon_1,
        title: "Cyber Security Solutions",
        sub_title: "Cloud Backup",
        cls: "1",
        description: <>Protect your data with enterprise-grade <br /> encryption and security protocols.</>,
        delay: ".9s",
    },
    {
        id: 11,
        icon: icon_2,
        img: icon_2,
        title: "AI Data Cloud Solution",
        sub_title: "Cloud Backup",
        cls: "2",
        description: <>Leverage cloud-powered AI to scale <br /> your communication infrastructure.</>,
        delay: ".9s",
    },
    {
        id: 12,
        icon: icon_3,
        img: icon_3,
        title: <>Managed <br /> Web Application</>,
        sub_title: "Cloud Backup",
        cls: "3",
        description: <>Fully managed web applications with <br /> 99.9% uptime and dedicated support.</>,
        delay: ".9s",
    },
    {
        id: 13,
        icon: icon_4,
        img: icon_4,
        title: "24/7 Customer Support",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Round-the-clock support from a team <br /> that honors its commitments.</>,
        delay: ".9s",
    },

    // for home 05
    {
        id: 14,
        icon: img_6,
        img: img_6,
        title: <>Secure <br /> Messaging</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 15,
        icon: img_7,
        img: img_7,
        title: <>Real-time <br /> Collaboration</>,
        sub_title: "Live",
        cls: "4",
        description: <>Collaborate in real time with <br /> zero latency and full reliability.</>,
        delay: ".9s",
    },
    {
        id: 16,
        icon: img_8,
        img: img_8,
        title: <>Unified <br /> Communications</>,
        sub_title: "Integrated",
        cls: "4",
        description: <>Bring voice, video, and messaging <br /> together in one trusted platform.</>,
        delay: ".9s",
    },
    {
        id: 17,
        icon: img_9,
        img: img_9,
        title: <>Enterprise <br /> API Suite</>,
        sub_title: "Scalable",
        cls: "4",
        description: <>Build on our reliable, transparent <br /> APIs — designed for scale.</>,
        delay: ".9s",
    },

    // service page
    {
        id: 18,
        icon: <Briefcase size={40} />,
        img: <Briefcase size={40} />,
        title: "Project Management",
        description: <>Automate workflows <br /> and collaborate in real time.</>,
        delay: ".9s",
    },
    {
        id: 19,
        icon: <TrendingUp size={40} />,
        img: <TrendingUp size={40} />,
        title: "Sales analytics",
        description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 20,
        icon: <FileText size={40} />,
        img: <FileText size={40} />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 21,
        icon: <Eye size={40} />,
        img: <Eye size={40} />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    {
        id: 22,
        icon: <Grid size={40} />,
        img: <Grid size={40} />,
        title: "FIELDS OPTION",
        description: <>Quick & Easy Repeater Fields Option</>,
        delay: ".9s",
    },
    
    {
        id: 23,
        icon: <Shield size={40} />,
        img: <Shield size={40} />,
        title: "Safe Online Services",
        description: <>Online services to view company level.</>,
        delay: ".9s",
    },
    
    {
        id: 24,
        icon: <Megaphone size={40} />,
        img: <Megaphone size={40} />,
        title: "Online marketing",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },


]
export default service_data