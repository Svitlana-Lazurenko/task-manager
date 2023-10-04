import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import TaskList from 'components/Tasks/TaskList/TaskList';
import Popup from 'components/Popup/Popup';
import { fetchTasks } from 'redux/tasks/operations';
import { selectIsLoading } from 'redux/tasks/selectors';
import { selectIsShowDeleteTaskPopup } from 'redux/popup/selectors';

const styles = {
  container: {
    padding: '30px 0',
    backgroundColor: 'rgb(34, 90, 17)',
  },
  button: {},
};

export default function Tasks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isShowDeleteTaskPopup = useSelector(selectIsShowDeleteTaskPopup);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks(id));
  }, [dispatch, id]);

  const handleOnNavigateCreateTask = () => {
    navigate(`/create-task/${id}`);
  };

  const handleOnNavigateCategories = () => {
    navigate('/categories');
  };

  return (
    <div style={styles.container}>
      <button
        type="button"
        onClick={handleOnNavigateCategories}
        style={styles.button}
      >
        Back
      </button>
      <button
        type="button"
        onClick={handleOnNavigateCreateTask}
        style={styles.button}
      >
        Add
      </button>
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
      {isShowDeleteTaskPopup && <Popup></Popup>}
    </div>
  );
}
