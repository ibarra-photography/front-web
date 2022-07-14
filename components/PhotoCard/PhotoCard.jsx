import React from "react";

import Image from "next/image";

import styles from "./photo-card.module.css";

const PhotoCard = ({ link, title, description }) => {
  return (
    <div>
      <Image
        src={link}
        alt={description}
        layout="intrinsic"
        width={200}
        height={200}
        loader={"akamai"}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default PhotoCard;
