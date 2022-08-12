import React from "react";

import styles from "./toast.module.css";

const Toast = ({ children, style, className }) => {
  return (
    <div className={styles["toast-container"]}>
      <div
        style={style}
        id="toast"
        data-testid="toast"
        className={styles[className + ""]}
      >
        {children}
      </div>
    </div>
  );
};

export default Toast;
