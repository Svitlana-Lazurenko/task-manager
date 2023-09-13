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
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categoriesArr = action.payload;
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
        const index = state.categoriesArr.findIndex(
          contact => contact.id === action.payload.id
        );
        state.categoriesArr.splice(index, 1);
      })
      .addCase(deleteCategory.rejected, handleRejected)

      .addCase(changeCategory.pending, handlePending)
      .addCase(changeCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const currentCategory = action.payload;
        const newCategory = state.categoriesArr.map(contact =>
          contact.id === currentCategory.id
            ? {
                id: contact.id,
                name: currentCategory.name,
              }
            : contact
        );
        state.contactsArr = newCategory;
      })
      .addCase(changeCategory.rejected, handleRejected)

      .addCase(logOut.fulfilled, state => {
        state.categoriesArr = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const { turnOnEditMode, turnOffEditMode } = categoriesSlice.actions;
export const contactsReducer = categoriesSlice.reducer;
