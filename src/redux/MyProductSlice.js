import {createSlice} from '@reduxjs/toolkit';

const MyProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addMyProducts(state, action) {
      state.push(action.payload);
    },
    increaseqty(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if(item.id==action.payload){
            myIndex = index;
        }
      });
      if(myIndex!==-1){
        state[myIndex].qty=state[myIndex].qty+1
      }
    },
    decreaseqty(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if(item.id==action.payload){
            myIndex = index;
        }
      });
      if(myIndex!==-1){
        state[myIndex].qty=state[myIndex].qty-1
      }
    },
  },
});

export const {addMyProducts,increaseqty,decreaseqty} = MyProductSlice.actions;
export default MyProductSlice.reducer;
