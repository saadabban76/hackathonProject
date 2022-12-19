import { createSlice } from '@reduxjs/toolkit';
import foods from '../json/foods.json';

const initialState = {
   allFoods: foods && [...foods],
   cart: []
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    allFoods: (state,action) => {
        state.allFoods = [...state.allFoods,action.payload];
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart: (state,action) => {
      const index = state.cart.findIndex((item)=>item.id === action.payload);

      let newCart = [...state.cart];

      if(index>=0) {
        newCart.splice(index,1);
      }else{
        console.warn('Cant remove product as its not in the basket !');
      }

      state.cart = [newCart];
    },
  },
})

// Action creators are generated for each case reducer function
export const { allFoods, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer