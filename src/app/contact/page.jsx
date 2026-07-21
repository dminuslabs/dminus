import Contact from "@/components/contact";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Troth Communications. Reach our Ethiopia production hub for creative services or our USA branch for new business. Let's communicate with truth.",
  openGraph: {
    title: "Contact Troth Communications | Let's Communicate with Truth",
    description:
      "Contact Troth Communications for branding, marketing, web development, video production, and live event services. Ethiopia production hub & USA client team ready to help.",
  },
};

const ContactPage = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default ContactPage;
