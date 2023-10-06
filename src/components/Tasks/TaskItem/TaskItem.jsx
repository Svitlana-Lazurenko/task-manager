import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Item,
  Text,
  TextDate,
  TextName,
  Button,
  Wrapper,
} from './TaskItem.styled';
import { setStatusDeleteTaskPopup } from 'redux/popup/slice';
import { setCurrentTaskId, setCurrentTask } from 'redux/tasks/slice';

const TaskItem = ({ id, name, description, dateStart, dateEnd }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnPopup = () => {
    dispatch(setStatusDeleteTaskPopup(true));
    dispatch(setCurrentTaskId(id));
  };

  const handleOnNavigateEditTask = () => {
    dispatch(setCurrentTask({ id, name, description, dateStart, dateEnd }));
    navigate(`/edit-task/${id}`);
  };

  return (
    <Item>
      <TextName>{name}</TextName>
      <Text>{description}</Text>
      <TextDate>date of start: {dateStart}</TextDate>
      <TextDate>date of end: {dateEnd}</TextDate>
      <Wrapper>
        <Button type="button" onClick={handleOnPopup}>
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
