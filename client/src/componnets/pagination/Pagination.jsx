import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {currentPage > 1 && (
          <li onClick={() => onPageChange(currentPage - 1)}>
            <span>{"<"}</span>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage === number ? styles.active : ""}
            onClick={() => onPageChange(number)}
          >
            {number}
          </li>
        ))}
        {currentPage < totalPages && (
          <li onClick={() => onPageChange(currentPage + 1)}>
            <span>{">"}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
