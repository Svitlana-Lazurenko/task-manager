import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import { addTask, changeTask } from 'redux/tasks/operations';
import { selectCurrentTask } from 'redux/tasks/selectors';
import { selectCurrentCategoryId } from 'redux/categories/selectors';
import {
  Form,
  Label,
  Button,
  Span,
  Text,
  InputText,
  InputTextArea,
  InputDate,
} from './CreateOrEditTaskForm.styled';

const CreateOrEditTaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const categoryId = useSelector(selectCurrentCategoryId);
  const currentTask = useSelector(selectCurrentTask);

  const locationArr = location.pathname.split('/');

  const [name, setName] = useState(
    locationArr[1] === 'create-task' ? '' : currentTask.name
  );
  const [description, setDescription] = useState(
    locationArr[1] === 'create-task' ? '' : currentTask.description
  );
  const [dateStart, setDateStart] = useState(
    locationArr[1] === 'create-task' ? '' : currentTask.dateStart
  );
  const [dateEnd, setDateEnd] = useState(
    locationArr[1] === 'create-task' ? '' : currentTask.dateEnd
  );

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangeDateStart = e => {
    setDateStart(e.target.value);
  };

  const handleChangeDateEnd = e => {
    setDateEnd(e.target.value);
  };

  const handleSubmitNewTask = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      addTask({
        id,
        task: {
          name: form.elements.name.value.trim(),
          description: form.elements.description.value.trim(),
          dateStart: form.elements.dateStart.value.trim(),
          dateEnd: form.elements.dateEnd.value.trim(),
        },
      })
    );
    form.reset();
    navigate(`/tasks/${categoryId}`);
  };

  const handleSubmitEditedTask = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      changeTask({
        id,
        task: {
          name: form.elements.name.value.trim(),
          description: form.elements.description.value.trim(),
          dateStart: form.elements.dateStart.value.trim(),
          dateEnd: form.elements.dateEnd.value.trim(),
        },
      })
    );
    form.reset();
    navigate(`/tasks/${categoryId}`);
  };

  return (
    <Form
      onSubmit={
        locationArr[1] === 'create-task'
          ? handleSubmitNewTask
          : handleSubmitEditedTask
      }
      autoComplete="off"
    >
      <Label>
        <Text> Name</Text>
        <InputText
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </Label>
      <Label>
        <Text> Description</Text>
        <InputTextArea
          name="description"
          placeholder="Enter description of task here..."
          rows="5"
          value={description}
          onChange={handleChangeDescription}
        />
      </Label>
      <Label>
        <Text> Name</Text>
        <InputDate
          type="date"
          name="dateStart"
          value={dateStart}
          onChange={handleChangeDateStart}
        />
      </Label>
      <Label>
        <Text> Name</Text>
        <InputDate
          type="date"
          name="dateEnd"
          value={dateEnd}
          onChange={handleChangeDateEnd}
        />
      </Label>
      <Button type="submit">
        Save
        <Span />
      </Button>
    </Form>
  );
};

export default CreateOrEditTaskForm;
