import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { addTask, changeTask } from 'redux/tasks/operations';

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
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const locationArr = location.pathname.split('/');

  const handleSubmitNewTask = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      addTask({
        id,
        task: {
          name: form.elements.name.value,
          description: form.elements.description.value,
          dateStart: form.elements.dateStart.value,
          dateEnd: form.elements.dateEnd.value,
        },
      })
    );

    form.reset();
  };

  const handleSubmitEditingTask = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      changeTask({
        id,
        task: {
          name: form.elements.name.value,
          description: form.elements.description.value,
          dateStart: form.elements.dateStart.value,
          dateEnd: form.elements.dateEnd.value,
        },
      })
    );

    form.reset();
  };

  return (
    <Form
      onSubmit={
        locationArr[1] === 'create-task'
          ? handleSubmitNewTask
          : handleSubmitEditingTask
      }
      autoComplete="off"
    >
      <Label>
        <Text> Name</Text>
        <InputText type="text" name="name" />
      </Label>
      <Label>
        <Text> Description</Text>
        <InputTextArea
          name="description"
          placeholder="Enter description of task here..."
          rows="5"
        />
      </Label>
      <Label>
        <Text> Name</Text>
        <InputDate type="date" name="dateStart" />
      </Label>
      <Label>
        <Text> Name</Text>
        <InputDate type="date" name="dateEnd" />
      </Label>
      <Button type="submit">
        Save
        <Span />
      </Button>
    </Form>
  );
};

export default CreateOrEditTaskForm;
