import React from "react";

import { MdClose } from "react-icons/md";

import Image from "next/image";
import b64toBlob from "services/base64toBlob";

import styles from "./Fullscreen.module.css";

const FullscreenPhoto = ({ photoBlob, title, onClose }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}}&q=${quality || 75}`;
  };
  return (
    <div className={styles.background} onClick={onClose}>
      <MdClose className={styles.close} onClick={onClose} />
      <Image
        alt={title}
        className={styles.photo}
        layout="fill"
        loader={myLoader}
        src={URL.createObjectURL(b64toBlob(photoBlob))}
      />
    </div>
  );
};

export default FullscreenPhoto;
