import React from "react";

import styles from "./loading-component.module.css";

const LoadingComponent = ({ children, style }) => {
  return (
    <div className={styles["loading-container"]} style={style}>
      {children}
    </div>
  );
};

export default LoadingComponent;
