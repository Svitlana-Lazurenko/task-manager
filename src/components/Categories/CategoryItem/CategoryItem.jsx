// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Item, Text, Button, Wrapper } from './CategoryItem.styled';

const CategoryItem = ({ id, name, numberOfTasks, date }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const idCategory = id;

  const handleOnModalActions = () => {
    return;
  };
  const handleOnNavigateTasks = () => {
    navigate(`/tasks/${id}`);
  };

  return (
    <Item>
      <Text>{name}</Text>
      <Text>{numberOfTasks}</Text>
      <Text>{date}</Text>
      <Wrapper>
        <Button type="button" onClick={handleOnModalActions}>
          actions
        </Button>
        <Button type="button" onClick={handleOnNavigateTasks}>
          more
        </Button>
      </Wrapper>
    </Item>
  );
};

export default CategoryItem;
