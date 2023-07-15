import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    priceRange: { min: 0, max: 1000 },
    filteredProducts: [],
    originalProducts: [],
  },
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setFilteredProducts: (state, action) => {
      if (action.payload.length === 0) {
        // Restore the original products when no filters are applied
        state.filteredProducts = state.originalProducts;
      } else {
        state.filteredProducts = action.payload;
      }
    },
    setOriginalProducts: (state, action) => {
      state.originalProducts = action.payload;
      state.filteredProducts = action.payload;
    },
  },
});

export const { setPriceRange, setFilteredProducts, setOriginalProducts } =
  filtersSlice.actions;

export const selectPriceRange = (state) => state.filters.priceRange;

export const selectFilteredProducts = (state) => state.filters.filteredProducts;

export default filtersSlice.reducer;
