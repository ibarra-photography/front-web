import React from "react";

import { Cormorant_Garamond } from "@next/font/google";

import { HomePageStyles } from "./HomePage.styles";

const font = Cormorant_Garamond({ weight: ["300"] });

export const HomePage = () => {
  return (
    <HomePageStyles.HomePageContainer className={font.className}>
      Ibarra Photography
    </HomePageStyles.HomePageContainer>
  );
};
