import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import {
  setStatusEditCategoryPopup,
  setStatusAddCategoryPopup,
  setStatusDeleteTaskPopup,
  setStatusDeleteCategoryPopup,
  setStatusMenuPopup,
} from 'redux/popup/slice';
import {
  setCurrentCategoryId,
  setCurrentCategoryName,
} from 'redux/categories/slice';
import { setCurrentTaskId } from 'redux/tasks/slice';
import {
  selectIsShowDeleteTaskPopup,
  selectIsShowDeleteCategoryPopup,
  selectIsShowEditCategoryPopup,
  selectIsShowAddCategoryPopup,
  selectIsShowMenuPopup,
} from 'redux/popup/selectors';
import {
  selectCurrentCategoryId,
  selectCurrentCategoryName,
} from 'redux/categories/selectors';
import { selectCurrentTaskId } from 'redux/tasks/selectors';
import { deleteTask } from 'redux/tasks/operations';
import {
  deleteCategory,
  changeCategory,
  addCategory,
} from 'redux/categories/operations';
import { PopupBackdrop, PopupContent } from './Popup.styled';

const Popup = () => {
  const isShowDeleteTaskPopup = useSelector(selectIsShowDeleteTaskPopup);
  const isShowDeleteCategoryPopup = useSelector(
    selectIsShowDeleteCategoryPopup
  );
  const isShowAddCategoryPopup = useSelector(selectIsShowAddCategoryPopup);
  const isShowEditCategoryPopup = useSelector(selectIsShowEditCategoryPopup);
  const isShowMenuPopup = useSelector(selectIsShowMenuPopup);
  const categoryId = useSelector(selectCurrentCategoryId);
  const categoryName = useSelector(selectCurrentCategoryName);
  const taskId = useSelector(selectCurrentTaskId);

  const dispatch = useDispatch();
  const [name, setName] = useState(categoryName);

  const resetState = useCallback(() => {
    dispatch(setStatusDeleteTaskPopup(false));
    dispatch(setStatusDeleteCategoryPopup(false));
    dispatch(setStatusEditCategoryPopup(false));
    dispatch(setStatusAddCategoryPopup(false));
    dispatch(setStatusMenuPopup(false));
    dispatch(setCurrentTaskId(null));
    dispatch(setCurrentCategoryId(null));
    dispatch(setCurrentCategoryName(''));
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        resetState();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, resetState]);

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      resetState();
    }
  };

  const handleCloseClick = () => {
    resetState();
  };

  const handleOnEditCategory = e => {
    dispatch(setStatusMenuPopup(false));
    dispatch(setStatusEditCategoryPopup(true));
  };

  const handleOnDeleteCategory = e => {
    dispatch(setStatusMenuPopup(false));
    dispatch(setStatusDeleteCategoryPopup(true));
  };

  const handleSubmitNewCategory = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    dispatch(addCategory({ name }));
    form.reset();
    resetState();
  };

  const handleSubmitEditedCategory = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    dispatch(
      changeCategory({
        id: categoryId,
        name,
      })
    );
    form.reset();
    resetState();
  };

  const handleSubmitDeletedCategory = e => {
    e.preventDefault();
    dispatch(deleteCategory(categoryId));
    resetState();
  };

  const handleSubmitDeletedTask = e => {
    e.preventDefault();
    dispatch(deleteTask(taskId));
    resetState();
  };

  return createPortal(
    <PopupBackdrop onClick={handleBackdropClick}>
      <PopupContent>
        {isShowMenuPopup && (
          <div>
            <button type="button" onClick={handleOnEditCategory}>
              Edit
            </button>
            <button type="button" onClick={handleOnDeleteCategory}>
              Delete
            </button>
          </div>
        )}
        {isShowDeleteCategoryPopup && (
          <div>
            <span>Do you want to delete this category ?</span>
            <button type="button" onClick={handleSubmitDeletedCategory}>
              yes
            </button>
            <button type="button" onClick={handleCloseClick}>
              no
            </button>
          </div>
        )}
        {isShowEditCategoryPopup && (
          <div>
            <form onSubmit={handleSubmitEditedCategory}>
              <label>
                <span>Edit {categoryName} category</span>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">save</button>
              <button type="button" onClick={handleCloseClick}>
                cancel
              </button>
            </form>
          </div>
        )}
        {isShowAddCategoryPopup && (
          <div>
            <form onSubmit={handleSubmitNewCategory}>
              <label>
                <span>Add new category</span>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">save</button>
              <button type="button" onClick={handleCloseClick}>
                cancel
              </button>
            </form>
          </div>
        )}
        {isShowDeleteTaskPopup && (
          <div>
            <span>Do you want to delete this task ?</span>
            <button type="button" onClick={handleSubmitDeletedTask}>
              yes
            </button>
            <button type="button" onClick={handleCloseClick}>
              no
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={handleCloseClick}
          className="Popup__close"
        >
          close
        </button>
      </PopupContent>
    </PopupBackdrop>,
    document.querySelector('#task-popup-root')
  );
};

export default Popup;
