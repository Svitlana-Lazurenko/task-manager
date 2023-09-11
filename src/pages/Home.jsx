import { Helmet } from 'react-helmet';
import Welcome from 'components/Welcome/Welcome';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Task Manager</title>
      </Helmet>
      <Welcome />
    </div>
  );
}
