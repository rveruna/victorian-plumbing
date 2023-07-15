import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './features/products/thunks/productsThunks';
import { selectFilteredProducts } from './features/filters/filtersSlice';
import Header from './components/Header';
import ProductsGrid from './components/ProductsGrid';
import TopSection from './components/TopSection';

const App = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <Header />
        <TopSection filteredProducts={filteredProducts} />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default App;

const styles = {
  app: {
    backgroundColor: '#f2f0eb',
    padding: '0 30px 30px',
    textAlign: 'center',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
  },
};
