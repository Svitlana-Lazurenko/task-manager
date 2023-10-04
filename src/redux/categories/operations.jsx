import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/categories');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.post('/api/categories', category);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/categories/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeCategory = createAsyncThunk(
  'categories/changeCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/categories/${category.id}`, {
        name: category.name,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
