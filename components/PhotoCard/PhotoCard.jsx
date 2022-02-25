import React from "react";

import styles from "./photo-card.module.css";

const PhotoCard = ({ link, title, description }) => {
  return (
    <div>
      <img className={styles.image} src={link} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default PhotoCard;
