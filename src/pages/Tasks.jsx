import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import AddButton from 'components/AddButton/AddButton';
import TaskList from 'components/Tasks/TaskList/TaskList';
import { fetchTasks } from 'redux/tasks/operations';
import { selectIsLoading } from 'redux/tasks/selectors';

const styles = {
  container: {
    padding: '30px 0',
    backgroundColor: 'rgb(34, 90, 17)',
  },
};

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const nameOfCategory =

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      {/* <Helmet>
        <title>{nameOfCategory}</title>
      </Helmet> */}
      <AddButton />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </div>
  );
}
