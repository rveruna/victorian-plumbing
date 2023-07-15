import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPriceRange,
  setPriceRange,
  setFilteredProducts,
} from '../../features/filters/filtersSlice';
import { usePagination } from '../../hooks/usePagination';
import { useProducts } from '../../hooks/useProducts';
import Error from '../Error';
import Filters from '../Filters';
import Loading from '../Loading';
import Pagination from '../Pagination';
import ProductsList from '../ProductsList';

const ProductsGrid = () => {
  const itemsPerPage = 10;
  const dispatch = useDispatch();
  const priceRange = useSelector(selectPriceRange);

  const { filteredProducts, status } = useProducts(priceRange);

  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedProducts,
    setCurrentPage,
  } = usePagination(filteredProducts, itemsPerPage);

  const handlePriceRangeChange = (event) => {
    const { name, checked } = event.target;
    const [min, max] = name.split('-');
    if (checked) {
      dispatch(setPriceRange({ min: Number(min), max: Number(max) }));
    } else {
      dispatch(setPriceRange({ min: null, max: null }));
      dispatch(setFilteredProducts([]));
    }
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <Error />;
  }

  return (
    <div style={styles.productGrid}>
      <aside style={styles.leftColumn}>
        <Filters
          priceRange={priceRange}
          handlePriceRangeChange={handlePriceRangeChange}
        />
      </aside>
      <main style={styles.rightColumn}>
        <ProductsList products={paginatedProducts} />
      </main>
      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        currentPage={currentPage}
      />
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
