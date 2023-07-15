import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './thunks/productsThunks';

const productsSlice = createSlice({
  name: 'products',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Here we need to check if the payload is not undefined before assigning it to list
        if (action.payload) {
          state.list = action.payload.products;
        } else {
          throw new Error('Payload is undefined');
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectProducts = (state) => state.products.list;

export const selectProductStatus = (state) => state.products.status;

export default productsSlice.reducer;
