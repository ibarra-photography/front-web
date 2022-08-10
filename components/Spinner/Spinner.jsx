import styles from "./spinner.module.css";

const Spinner = ({ containerStyles }) => (
  <div
    aria-label="spinner"
    className={styles["loader-container"]}
    style={containerStyles}
  >
    <span className={styles.loader} />
  </div>
);

export default Spinner;
