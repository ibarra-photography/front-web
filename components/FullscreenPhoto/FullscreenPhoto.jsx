import React from "react";

import Image from "next/image";
import b64toBlob from "services/base64toBlob";

import styles from "./Fullscreen.module.css";

const FullscreenPhoto = ({ photoBlob, title }) => {
  return (
    <div style={styles.background}>
      <Image
        // style={styles.photo}
        src={URL.createObjectURL(b64toBlob(photoBlob))}
        alt={title}
        layout="intrinsic"
        width={1080}
        height={1080}
      />
    </div>
  );
};

export default FullscreenPhoto;
