import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } =
    await axios.get(`https://6419b14fc152063412c93ba7.mockapi.io/items?page=${currentPage}&limit=4&
       ${category}&sortBy=${sortBy}&order=${order}${search}`);
  return data;
});

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.fulfilled]: (state, action) => {
      console.log(state);
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
