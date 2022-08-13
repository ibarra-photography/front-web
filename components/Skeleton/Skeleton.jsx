import Spinner from "components/Spinner/Spinner";
import React from "react";

import styles from "./skeleton.module.css";

const Skeleton = () => {
  return (
    <div aria-label="spinner" className={styles.skeleton}>
      <Spinner />
    </div>
  );
};

export default Skeleton;
