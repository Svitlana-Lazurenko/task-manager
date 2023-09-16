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
  async (id, task, thunkAPI) => {
    try {
      const response = await axios.post(`/api/tasks/${id}`, task);
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
  async (task, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/tasks/${task.id}`, {
        name: task.name,
        description: task.description,
        dateStart: task.dateStart,
        dateEnd: task.dateEnd,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
