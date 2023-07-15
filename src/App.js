import React from 'react';
import Header from './components/Header';
import ProductsGrid from './components/ProductsGrid';
import TopSection from './components/TopSection';

const App = () => {

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <Header />
        <TopSection />
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
