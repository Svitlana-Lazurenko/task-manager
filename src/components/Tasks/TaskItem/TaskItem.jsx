// import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { Item, Text, Button, Wrapper } from './TaskItem.styled';

const TaskItem = ({ id, name, description, dateStart, dateEnd }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const idItem = id;

  const handleOnDeleteModal = () => {
    return;
  };
  const handleOnNavigateEditTask = () => {
    navigate(`/edit-task/${id}`);
  };

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
        <Button type="button" onClick={handleOnNavigateEditTask}>
          edit
        </Button>
      </Wrapper>
    </Item>
  );
};

export default TaskItem;
