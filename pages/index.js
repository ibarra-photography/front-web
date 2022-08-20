import React from "react";

import Head from "next/head";
import Navigation from "../components/layout/Navigation/Navigation";

import { GoogleFonts } from "nextjs-google-fonts/GoogleFonts";

import styles from "../styles/home.module.css";

export default function Home() {
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
