import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Wrapper, UserEmail, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserEmail>{user.email}</UserEmail>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
