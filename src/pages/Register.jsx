import RegisterForm from 'components/RegisterForm/RegisterForm';

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    backgroundSize: `500px`,
  },
};

export default function Register() {
  return (
    <div style={styles.container}>
      <title>Registration</title>
      <RegisterForm />
    </div>
  );
}
