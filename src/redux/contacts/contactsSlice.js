import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.isLoading = true
  state.error = null
}

const handleRejected = (state, action) => {
  state.isLoading = false
      state.error = action.payload
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null},
  reducers: {},
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      // state.items = action.payload
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        error: null
      }
    },
    [addContact.fulfilled]: (state, action) => {
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
    [deleteContact.fulfilled]: (state, action) => {
      // state.items = action.payload
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [fetchContacts.pending] : handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    // [fetchContacts.fulfilled](state) {
    //   state.isLoading = false
    // },
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected] : handleRejected,
    [deleteContact.rejected] : handleRejected,
    
    
  },
});



export const contactsReducer = contactsSlice.reducer