import { createSlice } from '@reduxjs/toolkit';
import foods from '../json/foods.json';

const initialState = {
   allFoods: foods && [...foods],
   cart: [],
   cartCounter: 0,
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.cartCounter += 1
    },
    decrement: (state) => {
      if(state.cartCounter <= 0) {
        state.cartCounter = 0;
      }else{
        state.cartCounter -= 1
      }
    },
    allFoods: (state,action) => {
        state.allFoods = [...state.allFoods,action.payload];
    },
      addToCart: (state, action) => {
        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
          console.log("item : ",itemInCart.quantity);
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
    },
    removeFromCart: (state,action) => {
      const index = state.cart.findIndex((item)=>item.id === action.payload);
      if(index>=0) {
        state.cart[index].quantity -= 1;
      }else{
        console.warn('Cant remove product as its not in the basket !');
      }

      // updating the cart on removing the items 
      if(state.cart[index]?.quantity<=0) {
        state.cart.splice(index,1);
      }

    },
  },
})

// Action creators are generated for each case reducer function
export const { allFoods, addToCart, removeFromCart, increment, decrement } = cartSlice.actions

export default cartSlice.reducer