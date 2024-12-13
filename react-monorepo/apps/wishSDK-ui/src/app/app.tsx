// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Button } from '../index';

export function App() {
  return (
    <div>
      <Button />
      <NxWelcome title="wishSDK-ui" />
    </div>
  );
}

export default App;
