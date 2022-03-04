import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Navigation from "../components/layout/Navigation/Navigation";
import PhotoCard from "../components/PhotoCard/PhotoCard";
import PhotoCardsGrid from "../components/PhotoCardsGrid/PhotoCardsGrid";

import styles from "./../styles/gallery.module.css";

const gallery = () => {
  return (
    <div className={styles["gallery-container"]}>
      <Navigation />
      <h1>Gallery</h1>
      <div className={styles["photo-grid-container"]}>
        <PhotoCardsGrid />
      </div>
    </div>
  );
};

export default gallery;
