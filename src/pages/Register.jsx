import RegisterForm from 'components/RegisterForm/RegisterForm';

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
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
