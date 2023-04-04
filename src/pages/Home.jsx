import React, { useRef } from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import FeaturesBlocks1 from "../partials/FeaturesBlocks1";
import FeaturesZigZag from "../partials/FeaturesZigzag";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Banner from "../partials/Banner";
import Footer from "../partials/Footer";

function Home() {
  const refFooter = useRef(null);
  const refIntroduction = useRef(null);
  const refWhyYouChose = useRef(null);
  const refHowItWork = useRef(null);
  const refEcosytem = useRef(null);
  const handleClickIntroduction = () => {
    refIntroduction.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickFooter = () => {
    refFooter.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickHowItWork = () => {
    refHowItWork.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickEcosytem = () => {
    refEcosytem.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickWhyYouChose = () => {
    refWhyYouChose.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header
        handleClickIntroduction={handleClickIntroduction}
        handleClickFooter={handleClickFooter}
        handleClickHowItWork={handleClickHowItWork}
        handleClickEcosytem={handleClickEcosytem}
        handleClickWhyYouChose={handleClickWhyYouChose}
      />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks refIntroduction={refIntroduction} />
        <FeaturesZigZag refWhyYouChose={refWhyYouChose} />
        <Testimonials refHowItWork={refHowItWork} />
        <FeaturesBlocks1 refEcosytem={refEcosytem} />
        <Newsletter refFooter={refFooter} />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer  />
    </div>
  );
}

export default Home;
