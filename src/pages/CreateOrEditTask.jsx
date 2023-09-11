import CreateOrEditForm from 'components/CreateOrEditForm/CreateOrEditForm';
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
      <CreateOrEditForm />
    </div>
  );
}
