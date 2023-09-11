// import { useDispatch } from 'react-redux';
import { Item, Text, Button, Wrapper } from './CategoryItem.styled';

const CategoryItem = ({ id, name, numberOfTasks, date }) => {
  // const dispatch = useDispatch();

  const handleOnModalActions = () => {
    return;
  };
  const handleOnNavigateTasks = () => {};

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
