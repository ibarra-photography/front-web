import Spinner from "components/Spinner/Spinner";
import React from "react";

import styles from "./skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Spinner />
    </div>
  );
};

export default Skeleton;
