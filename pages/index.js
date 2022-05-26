import React, { useEffect, useState } from "react";

import fetchApiData from "../services/fetchApiData";

import Head from "next/head";
import Navigation from "../components/layout/Navigation/Navigation";
import { PhotoContext } from "../store/photo-context";

import { GoogleFonts } from "nextjs-google-fonts/GoogleFonts";

import styles from "../styles/home.module.css";

export default function Home() {
  const { photos, setPhotos } = React.useContext(PhotoContext);

  useEffect(() => {
    getPhotos();
  });

  const getPhotos = async () => {
    try {
      setPhotos(await fetchApiData());
      console.log("photos", photos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["home-container"]}>
      <Head>{GoogleFonts}</Head>
      <Navigation />
      <h1 className={styles.title}>Ibarra Photography</h1>
      <h2 className={styles.subtitle}>
        My name is Aitor Ibarra, this are some of the images I want to share
        with you
      </h2>
    </div>
  );
}
