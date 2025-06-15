import { HistoricalTimeline } from 'components';
import { historicalEvents } from 'utils/constants';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <HistoricalTimeline eventData={historicalEvents} />
    </div>
  );
};

export default App;
