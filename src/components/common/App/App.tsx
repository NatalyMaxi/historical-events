import { HistoricalTimeline } from 'components';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <HistoricalTimeline data={['1', '1', '1', '1', '1', '1']} />
    </div>
  );
};

export default App;
