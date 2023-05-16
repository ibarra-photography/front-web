import React, { FC, ReactNode } from 'react';

import styles from './Table.module.css';

type TableColumn<T, K extends keyof T> = {
  key: K;
  header: string;
  render?: (value: T[K]) => ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T, keyof T>[];
};

const Table = <T extends Record<string, number | string | boolean>>({ data, columns }: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(({ key, header }) => (
            <th key={String(key)}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={Math.random()} className={rowIndex % 2 === 0 ? styles.rowEven : styles.rowOdd}>
            {columns.map(({ key, render }) => (
              <td key={String(key)}>{render ? render(row[key]) : row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
