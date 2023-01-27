import { createSlice, configureStore } from "@reduxjs/toolkit";

const { createStore } = require("redux");

const initialState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state,action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "incrementby2") {
//     return {
//       counter: state.counter + 2,
//     };
//   }
//   if (action.type === "decrementby2") {
//     return {
//       counter: state.counter - 2,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === "decrease") {
//     return {
//       counter: state.counter - action.amount,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
