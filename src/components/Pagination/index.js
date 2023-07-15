import React from 'react';

const Pagination = ({ totalPages, handleClick, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={styles.pagination}>
      <ul style={styles.list}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            id={number}
            onClick={() => handleClick(number)}
            style={styles.item}
          >
            <a
              style={
                currentPage === number
                  ? { ...styles.link, ...styles.active }
                  : styles.link
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

const styles = {
  pagination: {
    gridColumn: '1 / span 2',
  },
  item: {
    display: 'inline-block',
    marginRight: 10,
  },
  active: {
    backgroundColor: 'black',
    color: 'white',
  },
  link: {
    cursor: 'pointer',
    display: 'block',
    padding: '10px 20px',
    backgroundColor: 'lightgrey',
    color: 'black',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background 0.2s ease-out',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
};
