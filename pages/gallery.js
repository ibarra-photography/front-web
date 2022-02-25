import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Navigation from "../components/layout/Navigation/Navigation";
import PhotoCard from "../components/PhotoCard/PhotoCard";

import styles from "./../styles/gallery.module.css";

const gallery = () => {
  return (
    <Fragment>
      <Navigation />
      <h1>Gallery</h1>
      <div className={styles["photo-grid-container"]}></div>
    </Fragment>
  );
};

export default gallery;
