import { useAuth } from 'hooks';
import { Wrapper, Title, Text, Cursor } from './Welcome.styled';

const Welcome = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <Wrapper>
      {isLoggedIn ? (
        <Title>
          <Text>Welcome to </Text>
          <Text>the Task Manager,</Text>
          <Text>
            {user.email}...
            <Cursor>|</Cursor>
          </Text>
        </Title>
      ) : (
        <Title>
          <Text>Welcome to</Text>
          <Text>
            the Task Manager...
            <Cursor>|</Cursor>
          </Text>
        </Title>
      )}
    </Wrapper>
  );
};

export default Welcome;
