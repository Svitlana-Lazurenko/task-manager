import CreateOrEditTaskForm from 'components/CreateOrEditTaskForm/CreateOrEditTaskForm';
// import Background from 'images/';

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    // backgroundImage: ` url(${Background})`,
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
