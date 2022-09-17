import React from "react";

import styles from "./pagination.module.css";
import { usePagination } from "./usePagination";

const Pagination = ({ totalPages = 1 }) => {
  const { page, nextPageHandler, prevPageHandler } = usePagination(totalPages);

  return (
    <div className={styles.pagination}>
      <button className={styles.button} onClick={prevPageHandler}>
        Prev
      </button>
      {page}/{totalPages}
      <button className={styles.button} onClick={nextPageHandler}>
        Nex
      </button>
    </div>
  );
};

export default Pagination;
