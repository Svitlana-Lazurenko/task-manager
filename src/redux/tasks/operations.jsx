import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/tasks/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (obj, thunkAPI) => {
    try {
      const response = await axios.post(`/api/tasks/${obj.id}`, obj.task);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeTask = createAsyncThunk(
  'tasks/changeTask',
  async (obj, thunkAPI) => {
    try {
      const response = await axios.put(`/api/tasks/${obj.id}`, {
        name: obj.task.name,
        description: obj.task.description,
        dateStart: obj.task.dateStart,
        dateEnd: obj.task.dateEnd,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
