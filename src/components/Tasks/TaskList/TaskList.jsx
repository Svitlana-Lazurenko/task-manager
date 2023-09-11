import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import TaskItem from 'components/Tasks/TaskItem/TaskItem';
import { List } from './TaskList.styled';

const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <List>
      {tasks.map(({ id, name, description, dateStart, dateEnd }) => (
        <TaskItem
          key={id}
          name={name}
          description={description}
          dateStart={dateStart}
          dateEnd={dateEnd}
          id={id}
        />
      ))}
    </List>
  );
};

export default TaskList;
