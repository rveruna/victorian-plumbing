import React from 'react';
import StarRating from '../StarRating';

const ProductCard = ({ product }) => {
  const { averageRating, productName, price, stockStatus, reviewsCount } =
    product;

  return (
    <a style={styles.card}>
      <img
        src={product.image.url}
        alt={product.image.attributes.imageAltText}
        style={styles.image}
      />
      <div style={styles.info}>
        <h2 style={styles.name}>{productName}</h2>
        <div style={styles.price}>£{price.priceIncTax}</div>
      </div>
      <div style={styles.stockStatus}>
        {stockStatus.status === 'G' ? 'In Stock' : 'Out of Stock'}
      </div>
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
