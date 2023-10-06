import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchCategories,
  addCategory,
  deleteCategory,
  changeCategory,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesInitialState = {
  categoriesArr: [],
  isLoading: false,
  error: null,
  currentCategoryId: null,
  currentCategoryName: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesInitialState,

  reducers: {
    setCurrentCategoryId(state, action) {
      state.currentCategoryId = action.payload;
    },
    setCurrentCategoryName(state, action) {
      state.currentCategoryName = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categoriesArr = action.payload.categories;
      })
      .addCase(fetchCategories.rejected, handleRejected)

      .addCase(addCategory.pending, handlePending)
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categoriesArr.push(action.payload);
      })
      .addCase(addCategory.rejected, handleRejected)

      .addCase(deleteCategory.pending, handlePending)
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.categoriesArr.findIndex(category => {
          return category._id === action.payload._id;
        });

        state.categoriesArr.splice(index, 1);
      })
      .addCase(deleteCategory.rejected, handleRejected)

      .addCase(changeCategory.pending, handlePending)
      .addCase(changeCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const currentCategory = action.payload;
        const newCategories = state.categoriesArr.map(category => {
          return category._id === currentCategory._id
            ? currentCategory
            : category;
        });
        state.categoriesArr = newCategories;
      })
      .addCase(changeCategory.rejected, handleRejected)

      .addCase(logOut.fulfilled, state => {
        state.categoriesArr = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const {
  turnOnEditMode,
  turnOffEditMode,
  setCurrentCategoryId,
  setCurrentCategoryName,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
