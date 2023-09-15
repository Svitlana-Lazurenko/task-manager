import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
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

const CreateTaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      addTask({
        name: form.elements.name.value,
        description: form.elements.description.value,
        dateStart: form.elements.dateStart.value,
        dateEnd: form.elements.dateEnd.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
        <InputDate type="date" name="date-start" />
      </Label>
      <Label>
        <Text> Name</Text>
        <InputDate type="date" name="date-end" />
      </Label>
      <Button type="submit">
        Save
        <Span />
      </Button>
    </Form>
  );
};

export default CreateTaskForm;
