import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isShowDeleteTaskPopup: false,
    isShowDeleteCategoryPopup: false,
    isShowEditCategoryPopup: false,
    isShowAddCategoryPopup: false,
    isShowMenuPopup: false,
  },

  reducers: {
    setStatusDeleteTaskPopup(state, action) {
      state.isShowDeleteTaskPopup = action.payload;
    },
    setStatusDeleteCategoryPopup(state, action) {
      state.isShowDeleteCategoryPopup = action.payload;
    },
    setStatusEditCategoryPopup(state, action) {
      state.isShowEditCategoryPopup = action.payload;
    },
    setStatusAddCategoryPopup(state, action) {
      state.isShowAddCategoryPopup = action.payload;
    },
    setStatusMenuPopup(state, action) {
      state.isShowMenuPopup = action.payload;
    },
  },
});

export const {
  setStatusDeleteTaskPopup,
  setStatusDeleteCategoryPopup,
  setStatusEditCategoryPopup,
  setStatusAddCategoryPopup,
  setStatusMenuPopup,
} = popupSlice.actions;

export const popupReducer = popupSlice.reducer;
