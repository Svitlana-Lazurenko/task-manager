import { useAuth } from 'hooks';
import { Title } from './Welcome.styled';

const Welcome = () => {
  const { user, isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Title>
      Welcome to the Task Manager,
      <br />
      {user.email}
    </Title>
  ) : (
    <Title>Welcome to the Task Manager</Title>
  );
};

export default Welcome;
