import React from "react";

import Image from "next/image";

import styles from "./photo-card.module.css";

const PhotoCard = ({ link, title, description }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <div aria-label="image" className={styles["card-limit"]}>
      <Image
        loader={myLoader}
        className={styles.image}
        src={link}
        alt={description}
        layout="fix"
        width={200}
        height={200}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default PhotoCard;
