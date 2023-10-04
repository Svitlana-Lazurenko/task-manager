export const selectTasks = state => state.tasks.tasksArr;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectCurrentTaskId = state => state.tasks.currentTaskId;

export const selectCurrentTask = state => state.tasks.currentTask;
