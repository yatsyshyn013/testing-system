import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// axios.defaults.baseURL = "https://646a14b1183682d6144d2ef5.mockapi.io/contacts"

export const fetchTests = createAsyncThunk(
     'tests/fetchTests',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/tests');
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
)

export const fetchTestById = createAsyncThunk(
     'tests/fetchTestById',
  async (id, thunkAPI) => {
    try {
        const response = await axios.get(`/tests/${id}`);
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
)

export const changeCurrentQuestionIndex = createAction(
     'tests/changeCurrentQuestionIndex'
)

export const addTests = createAsyncThunk(
     'tests/addTests',
async (text, thunkAPI) => {
    try {
        const response = await axios.post('/tests', {...text});
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteTests  = createAsyncThunk(
     'tests/deleteTests',
  async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/tests/${id}`);
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
)

