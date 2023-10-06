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
  },
  button: {
    height: 40,

    padding: '10px 20px',
    display: 'block',
    overflow: 'hidden',

    border: '2px solid rgb(2, 211, 200)',
    borderRadius: 10,

    color: 'rgb(125, 202, 0)',
    fontSize: 15,
    fontWeight: 600,

    textTransform: 'uppercase',
    letterSpacing: 6,
  },
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
        style={{
          ...styles.button,
          marginBottom: '10px',
          marginLeft: '25px',
          backgroundColor: 'transparent',
        }}
      >
        Back
      </button>
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
      <button
        type="button"
        onClick={handleOnNavigateCreateTask}
        style={{
          ...styles.button,
          margin: '30px auto 0',
          backgroundColor: 'rgb(193, 255, 252)',
        }}
      >
        Add
      </button>
      {isShowDeleteTaskPopup && <Popup></Popup>}
    </div>
  );
}
