import styles from "./spinner.module.css";

const Spinner = ({ containerStyles }) => (
  <div className={styles["loader-container"]} style={containerStyles}>
    <span className={styles.loader} />
  </div>
);

export default Spinner;
