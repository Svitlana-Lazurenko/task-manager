import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import { Form, Label, Input, Button, Text } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        role: form.elements.role.value.trim(),
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim(),
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Text> Role</Text>
        <Input type="text" name="role" />
      </Label>
      <Label>
        <Text> Email</Text>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <Text> Password</Text>
        <Input type="password" name="password" />
      </Label>
      {error && <Text>{error}</Text>}
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
