import React from "react";
import HomeCategories from "./HomeCategories";
import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeProducts from "./HomeProducts";
import HomeServices from "./HomeServices";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <HomeIntro />
      <HomeCategories />
      <HomeProducts />
      <HomeServices />
    </div>
  );
}
