import { createSlice } from "@reduxjs/toolkit";
import { fetchTests, addTests, deleteTests, fetchTestById, changeCurrentQuestionIndex } from "./operations";

const handlePending = (state) => {
  state.isLoading = true
  state.error = null
}

const handleRejected = (state, action) => {
  state.isLoading = false
      state.error = action.payload
}

const testsSlice = createSlice({
  name: "tests",
  initialState: {
    items: [],
    testById: [],
    currentTestArray: [],
    currentQuestionIndex: 0,
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchTests.fulfilled]: (state, action) => {
      // state.items = action.payload
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        error: null
      }
    },
    [fetchTestById.fulfilled]: (state, action) => {
      // state.items = action.payload
      return {
        ...state,
        testById: action.payload,
        currentTestArray: action.payload.test,
        isLoading: false,
        error: null
      }
    },
    [changeCurrentQuestionIndex.fulfilled]: (state, action) => {
      // state.items = action.payload
      return {
        ...state,
       currentQuestionIndex: state.currentQuestionIndex +1,
      }
    },
    [addTests.fulfilled]: (state, action) => {
      // state.items = action.payload
      // return {
      //   ...state,
      //   items: [...state.items, ...action.payload],
      //   isLoading: false,
      //   error: null
      // }
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteTests.fulfilled]: (state, action) => {
      // state.items = action.payload
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [fetchTests.pending]: handlePending,
    [fetchTestById.pending] : handlePending,
    [addTests.pending]: handlePending,
    [deleteTests.pending]: handlePending,
    // [fetchContacts.fulfilled](state) {
    //   state.isLoading = false
    // },
    [fetchTests.rejected]: handleRejected,
    [fetchTestById.rejected]: handleRejected,
    [addTests.rejected] : handleRejected,
    [deleteTests.rejected] : handleRejected,
    
    
  },
});



export const TestsReducer = testsSlice.reducer