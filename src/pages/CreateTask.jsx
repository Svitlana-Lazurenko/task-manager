import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateOrEditTaskForm from 'components/CreateOrEditTaskForm/CreateOrEditTaskForm';
import { selectCurrentCategoryId } from 'redux/categories/selectors';

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
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

    marginBottom: 20,
    marginLeft: 167,
    backgroundColor: 'transparent',
  },
};

export default function CreateOrEditTask() {
  const navigate = useNavigate();
  const categoryId = useSelector(selectCurrentCategoryId);

  const handleOnNavigateBack = e => {
    navigate(`/tasks/${categoryId}`);
  };

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        type="button"
        onClick={handleOnNavigateBack}
      >
        Back
      </button>
      <CreateOrEditTaskForm />
    </div>
  );
}
