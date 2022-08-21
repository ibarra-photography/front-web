import React, { useState } from "react";

import styles from "./pagination.module.css";

const Pagination = ({ pageHandler }) => {
  const [page, setPage] = useState(() => 1);

  const prevPageHandler = () => {
    setPage((currentPage) => {
      if (currentPage === 1) return currentPage;
      pageHandler(currentPage - 1);
      return currentPage - 1;
    });
  };

  const nextPageHandler = () => {
    console.log("render...");
    setPage((currentPage) => {
      pageHandler(currentPage + 1);
      return currentPage + 1;
    });
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.button} onClick={prevPageHandler}>
        Prev
      </button>
      {page}
      <button className={styles.button} onClick={nextPageHandler}>
        Nex
      </button>
    </div>
  );
};

export default Pagination;
