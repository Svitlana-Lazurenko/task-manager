// import { useDispatch } from 'react-redux';
import { Item, Text, Button, Wrapper } from './TaskItem.styled';

const TaskItem = ({ id, name, description, dateStart, dateEnd }) => {
  // const dispatch = useDispatch();

  const handleOnDeleteModal = () => {
    return;
  };
  const handleOnNavigateCreateOrEditTask = () => {};

  return (
    <Item>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{dateStart}</Text>
      <Text>{dateEnd}</Text>
      <Wrapper>
        <Button type="button" onClick={handleOnDeleteModal}>
          delete
        </Button>
        <Button type="button" onClick={handleOnNavigateCreateOrEditTask}>
          edit
        </Button>
      </Wrapper>
    </Item>
  );
};

export default TaskItem;
