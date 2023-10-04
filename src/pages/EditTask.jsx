import CreateOrEditTaskForm from 'components/CreateOrEditTaskForm/CreateOrEditTaskForm';

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    backgroundSize: `500px`,
  },
};

export default function CreateOrEditTask() {
  return (
    <div style={styles.container}>
      <CreateOrEditTaskForm />
    </div>
  );
}
