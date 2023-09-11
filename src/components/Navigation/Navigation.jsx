import { useAuth } from 'hooks';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/categories">Categories</Link>}
    </nav>
  );
};

export default Navigation;
