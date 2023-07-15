import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts } from '../utils/filterProducts';
import { fetchProducts } from '../features/products/thunks/productsThunks';
import {
  selectFilteredProducts,
  setFilteredProducts,
} from '../features/filters/filtersSlice';
import {
  selectProductStatus,
  selectProducts,
} from '../features/products/productsSlice';

export const useProducts = (priceRange) => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const filtered = filterProducts(products, priceRange);
    dispatch(setFilteredProducts(filtered));
  }, [products, priceRange, dispatch]);

  return { filteredProducts, status };
};
