import Wrapper from "@/layouts/wrapper";
import HomeFive from "@/components/homes/home-5";

export const metadata = {
  title: "Home",
  description:
    "Troth Communications is a full-service creative agency helping brands communicate with truth. We offer branding, marketing, web development, video production, and live event streaming from Ethiopia to the USA.",
  openGraph: {
    title: "Troth Communications | Creative Branding, Marketing & Media Agency",
    description:
      "Troth Communications is a full-service creative agency helping brands communicate with truth. We offer branding, marketing, web development, video production, and live event streaming from Ethiopia to the USA.",
  },
};

const HomePage = () => {
  return (
    <Wrapper>
      <HomeFive />
    </Wrapper>
  );
};

export default HomePage;
