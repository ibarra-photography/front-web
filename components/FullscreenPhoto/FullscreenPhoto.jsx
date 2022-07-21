import React from "react";

import Image from "next/image";
import b64toBlob from "services/base64toBlob";

import styles from "./Fullscreen.module.css";

const FullscreenPhoto = ({ photoBlob, title, onClose }) => {
  return (
    <div className={styles.background} onClick={onClose}>
      <Image
        className={styles.photo}
        src={URL.createObjectURL(b64toBlob(photoBlob))}
        alt={title}
        layout="fill"
        width={700}
        height={475}
      />
    </div>
  );
};

export default FullscreenPhoto;
