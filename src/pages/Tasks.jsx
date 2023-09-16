import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import AddButton from 'components/AddButton/AddButton';
import TaskList from 'components/Tasks/TaskList/TaskList';
import { fetchTasks } from 'redux/tasks/operations';
import { selectIsLoading } from 'redux/tasks/selectors';

const styles = {
  container: {
    padding: '30px 0',
    backgroundColor: 'rgb(34, 90, 17)',
  },
  button: {
    // padding: '30px 0',
    // backgroundColor: 'rgb(34, 90, 17)',
  },
};

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  const { id } = useParams();
  // const currentCategory =
  // const nameOfCategory =

  const handleOnNavigateCreateTask = () => {
    navigate(`/create-task/${id}`);
  };
  useEffect(() => {
    dispatch(fetchTasks(id));
  }, [dispatch, id]);

  return (
    <div style={styles.container}>
      {/* <Helmet>
        <title>{nameOfCategory}</title>
      </Helmet> */}
      {/* <Button type="button" onClick={handleOnNavigateCreateTask}> */}
      {/* Add
      </Button> */}
      <button
        type="button"
        onClick={handleOnNavigateCreateTask}
        style={styles.button}
      >
        Add
      </button>
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </div>
  );
}
