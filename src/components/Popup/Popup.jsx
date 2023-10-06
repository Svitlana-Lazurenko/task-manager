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
import {
  PopupBackdrop,
  PopupContent,
  Container,
  Button,
  Text,
  TextName,
  Form,
  Input,
  Wrapper,
} from './Popup.styled';

const Popup = () => {
  const isShowDeleteTaskPopup = useSelector(selectIsShowDeleteTaskPopup);
  const isShowDeleteCategoryPopup = useSelector(
    selectIsShowDeleteCategoryPopup
  );
  const isShowAddCategoryPopup = useSelector(selectIsShowAddCategoryPopup);
  const isShowEditCategoryPopup = useSelector(selectIsShowEditCategoryPopup);
  const isShowMenuPopup = useSelector(selectIsShowMenuPopup);
  const categoryName = useSelector(selectCurrentCategoryName);
  const categoryId = useSelector(selectCurrentCategoryId);
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

  const handleOnEditCategoryPopup = e => {
    dispatch(setStatusMenuPopup(false));
    dispatch(setStatusEditCategoryPopup(true));
  };

  const handleOnDeleteCategoryPopup = e => {
    dispatch(setStatusMenuPopup(false));
    dispatch(setStatusDeleteCategoryPopup(true));
  };

  const handleSubmitNewCategory = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    dispatch(addCategory({ name }));
    form.reset();
    resetState();
  };

  const handleSubmitEditedCategory = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
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
          <Container>
            <Wrapper>
              <Button type="button" onClick={handleOnEditCategoryPopup}>
                Edit
              </Button>
              <Button type="button" onClick={handleOnDeleteCategoryPopup}>
                Delete
              </Button>
            </Wrapper>
          </Container>
        )}
        {isShowDeleteCategoryPopup && (
          <Container>
            <Text>Do you want to delete this category ?</Text>
            <Wrapper>
              <Button type="button" onClick={handleSubmitDeletedCategory}>
                yes
              </Button>
              <Button type="button" onClick={handleCloseClick}>
                no
              </Button>
            </Wrapper>
          </Container>
        )}
        {isShowEditCategoryPopup && (
          <Container>
            <Form onSubmit={handleSubmitEditedCategory}>
              <Text>Edit {categoryName} category</Text>
              <label>
                <TextName>name: </TextName>
                <Input
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <Wrapper>
                <Button type="submit">save</Button>
                <Button type="button" onClick={handleCloseClick}>
                  cancel
                </Button>
              </Wrapper>
            </Form>
          </Container>
        )}
        {isShowAddCategoryPopup && (
          <Container>
            <Form onSubmit={handleSubmitNewCategory}>
              <Text>Add new category</Text>
              <label>
                <TextName>name: </TextName>
                <Input
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <Wrapper>
                <Button type="submit">save</Button>
                <Button type="button" onClick={handleCloseClick}>
                  cancel
                </Button>
              </Wrapper>
            </Form>
          </Container>
        )}
        {isShowDeleteTaskPopup && (
          <Container>
            <Text>Do you want to delete this task ?</Text>
            <Wrapper>
              <Button type="button" onClick={handleSubmitDeletedTask}>
                yes
              </Button>
              <Button type="button" onClick={handleCloseClick}>
                no
              </Button>
            </Wrapper>
          </Container>
        )}
      </PopupContent>
    </PopupBackdrop>,
    document.querySelector('#task-popup-root')
  );
};

export default Popup;
