export const selectCategories = state => state.categories.categoriesArr;

export const selectIsLoading = state => state.categories.isLoading;

export const selectError = state => state.categories.error;

export const selectCurrentCategoryId = state =>
  state.categories.currentCategoryId;

export const selectCurrentCategoryName = state =>
  state.categories.currentCategoryName;
