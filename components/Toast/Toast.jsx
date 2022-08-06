import React from "react";

import styles from "./toast.module.css";

const Toast = ({ children }) => {
  return (
    <div id="toast" className={styles.toast}>
      {children}
    </div>
  );
};

export default Toast;
