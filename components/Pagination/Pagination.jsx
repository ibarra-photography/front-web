import { useRouter } from "node_modules/next/router";
import React, { useState } from "react";

import styles from "./pagination.module.css";

const Pagination = ({ totalPages = 1 }) => {
  const { query, push, route } = useRouter();

  const page = query.page ? query.page : 1;
  console.log("query", page, totalPages);
  const prevPageHandler = () => {
    if (page == 1) return;
    push(`${route}?page=${+page - 1}`);
  };

  const nextPageHandler = () => {
    if (page == totalPages) return;
    push(`${route}?page=${+page + 1}`);
  };

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
