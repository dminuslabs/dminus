import { Globe, MessageCircle, Briefcase, Camera } from 'lucide-react';
import Link from "next/link";


const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "facebook", 
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "twitter", 
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "linkedin", 
  }, 
];

const socialIconMap = {
  facebook: Globe,
  twitter: MessageCircle,
  linkedin: Briefcase,
};

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => {
        const Icon = socialIconMap[l.icon];
        return (
          <Link
            key={i}
            href={l.link}
            target={l.target ? l.target : ""}
          >
            {Icon && <Icon size={16} />}
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;






const copy_right_text = {
  copy_right: <> &copy; {new Date().getFullYear()} <Link href="/">Troth Communication</Link>. All rights reserved.</>,
}
const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




// home 04 social link
const social_links_two = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "facebook",
    color: "1", 
  },
  {
      link: "https://www.instagram.com",
      target: "_blank",
      icon: "instagram", 
      color: "2",
  },

  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "twitter", 
    color: "3",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "linkedin",
    color: "4", 
  }, 
];

const socialIconMapTwo = {
  facebook: Globe,
  twitter: MessageCircle,
  linkedin: Briefcase,
  instagram: Camera,
};

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => {
          const Icon = socialIconMapTwo[link.icon];
          return (
            <Link
              key={i}
              target={link.target}
              className={`icon-color-${link.color}`}
              href={link.link}
            >
              {Icon && <Icon size={16} />}
              <span></span>
            </Link>
          );
        })}
     </>
   );
}