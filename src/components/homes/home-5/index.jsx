'use client';
import ContextProvider from "@/context/ContextProvider";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import BusinessBox from "./business-box";
import CtaArea from "./cta-area";
import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import IntegrationArea from "./integration-area";
import PlanArea from "./plan-area";
import ServiceArea from "./service-area";
import ServicesArea from "../home/services-area";

const HomeFive = () => {
  return (
    <ContextProvider>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
			<ServicesArea />
            <FunFactArea />
            <ServiceArea />
            <CtaArea />
            <PlanArea />
            <IntegrationArea />
            <BusinessBox />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </ContextProvider>
  );
};

export default HomeFive;
