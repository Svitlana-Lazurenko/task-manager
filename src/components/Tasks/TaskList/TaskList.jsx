import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import TaskItem from 'components/Tasks/TaskItem/TaskItem';
import { List } from './TaskList.styled';

const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <List>
      {tasks.map(({ _id, name, description, dateStart, dateEnd }) => (
        <TaskItem
          key={_id}
          name={name}
          description={description}
          dateStart={dateStart}
          dateEnd={dateEnd}
          id={_id}
        />
      ))}
    </List>
  );
};

export default TaskList;
