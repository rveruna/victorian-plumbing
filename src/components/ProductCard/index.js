import React from 'react';

const ProductCard = () => {
  return (
    <a style={styles.card}>
      <img src='src' alt='alt' style={styles.image} />
      <div style={styles.info}>
        <h2 style={styles.name}>name</h2>
        <div style={styles.price}>£99</div>
      </div>
      <div style={styles.stockStatus}>In Stock</div>
    </a>
  );
};

export default ProductCard;

const styles = {
  card: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    border: '1px solid #ccc',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    padding: 10,
  },
  image: {
    height: 'auto',
    marginBottom: 10,
    minWidth: 190,
    width: '100%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
    paddingRight: 20,
    textAlign: 'left',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
    minHeight: 70,
  },
  price: {
    color: '#cf0010',
    fontSize: 14,
    fontWeight: 'bold',
  },
  stockStatus: {
    borderRadius: 4,
    fontSize: 12,
    padding: 4,
  },
};
