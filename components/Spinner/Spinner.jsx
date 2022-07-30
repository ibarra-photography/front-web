import React from "react";

import styles from "./spinner.module.css";

const Spinner = ({ containerStyles }) => {
  return (
    <div className={styles["loader-container"]} style={containerStyles}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Spinner;
