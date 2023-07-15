import React from 'react';
import Filters from '../Filters';
import ProductsList from '../ProductsList';

const ProductsGrid = () => {
  return (
    <div style={styles.productGrid}>
      <aside style={styles.leftColumn}>
        <Filters />
      </aside>
      <main style={styles.rightColumn}>
        <ProductsList />
      </main>
    </div>
  );
};

export default ProductsGrid;

const styles = {
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f7f7f7',
    alignItems: 'start',
    alignSelf: 'start',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: 20,
  },
  rightColumn: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
  },
};
