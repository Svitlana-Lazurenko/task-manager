import LoginForm from 'components/LoginForm/LoginForm';

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    backgroundSize: `500px`,
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <title>Login</title>
      <LoginForm />
    </div>
  );
}
