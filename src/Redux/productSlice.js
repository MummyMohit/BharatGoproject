import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  'products/fetch',
  async (categoryId, filter) => {
    const data = categoryId
      ? `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
      : `https://api.escuelajs.co/api/v1/products`;
    const response = await axios.get(data);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    productitem: [],
    filteredProductItems: [],
    cartItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredProductItems = state.productitem.filter((product) => {
        const titleMatch = product.title.toLowerCase().includes(query);
        const priceMatch = product.price.toString().includes(query); 
        const categoryMatch = product.category?.name?.toLowerCase().includes(query);
        return titleMatch || priceMatch || categoryMatch;
      });
      
    },

    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.cartItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    }  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productitem = action.payload;
        state.filteredProductItems = action.payload; 
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilteredProducts,addToCart, removeFromCart, clearCart  } = productSlice.actions;
export default productSlice.reducer;
