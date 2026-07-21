import Wrapper from "@/layouts/wrapper";
import About from "@/components/about";

export const metadata = {
  title: "About",
  description:
    "Learn about Troth Communications — a creative agency built on the principle of communicating with truth. With production in Ethiopia and client acquisition in the USA, we serve the Ethiopian diaspora and global brands.",
  openGraph: {
    title: "About Troth Communications | Creative Branding & Media Agency",
    description:
      "Discover how Troth Communications bridges Ethiopia and the USA to deliver world-class branding, marketing, video production, and live event services with authentic communication at our core.",
  },
};

const AboutPage = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default AboutPage;
