import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Item,
  Text,
  TextNumber,
  TextDate,
  Button,
  Wrapper,
} from './CategoryItem.styled';
import Popup from 'components/Popup/Popup';
import { setStatusMenuPopup } from 'redux/popup/slice';
import { selectIsShowMenuPopup } from 'redux/popup/selectors';
import {
  setCurrentCategoryId,
  setCurrentCategoryName,
} from 'redux/categories/slice';

const CategoryItem = ({ id, name, numberOfTasks, date }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isShowMenuPopup = useSelector(selectIsShowMenuPopup);
  const dateArr = date.split('T');

  const handleOnNavigateTasks = () => {
    navigate(`/tasks/${id}`);
    dispatch(setCurrentCategoryId(id));
  };

  const handleOnPopup = () => {
    dispatch(setStatusMenuPopup(true));
    dispatch(setCurrentCategoryId(id));
    dispatch(setCurrentCategoryName(name));
  };

  return (
    <Item>
      <Text>{name}</Text>

      <Wrapper>
        <TextNumber>{numberOfTasks} tasks |</TextNumber>
        <TextDate>{dateArr[0]}</TextDate>
        <Button type="button" onClick={handleOnPopup}>
          actions
        </Button>
        <Button type="button" onClick={handleOnNavigateTasks}>
          more
        </Button>
      </Wrapper>
      {isShowMenuPopup && <Popup></Popup>}
    </Item>
  );
};

export default CategoryItem;
