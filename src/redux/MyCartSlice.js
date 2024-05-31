import {createSlice} from '@reduxjs/toolkit';

const MyCartSlice = createSlice({
  name: 'Cart',
  initialState: [],
  reducers: {
    addProductToMyCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({
          brand: action.payload.brand,
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          price: action.payload.price,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },
    removeProductFromMyCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex !== -1) {
        state[myIndex].qty = state[myIndex].qty - 1;
      }
    },
    deleteMyCartItem(state, action) {
      return (state = state.filter(item => item.id !== action.payload));
    },
  },
});

export const {addProductToMyCart, removeProductFromMyCart, deleteMyCartItem} =
  MyCartSlice.actions;
export default MyCartSlice.reducer;
