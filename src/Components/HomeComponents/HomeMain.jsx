import React from "react";

import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeProducts from "./HomeProducts";
import HomeServices from "./HomeServices";
import HomeSweets from "./HomeSweets";
import HomeBestSelling from "./HomeBestSelling";
import HommeTestimonials from "./HommeTestimonials";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <HomeIntro />
      <HomeBestSelling />
      <HomeSweets />
      <HomeProducts />
      <HommeTestimonials />
      {/* <HomeServices /> */}
    </div>
  );
}
