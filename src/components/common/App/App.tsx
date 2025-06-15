import { useState } from 'react';

import { Header, HistoricalTimeline, Select } from 'components';
import { historicalEvents, options } from 'utils/constants';

import styles from './App.module.scss';

const App = () => {
  const [periodCount, setPeriodCount] = useState<number | ''>('');

  const filteredEvents =
    typeof periodCount === 'number' ? historicalEvents.slice(0, periodCount) : historicalEvents;

  return (
    <div className={styles.app}>
      <Header>
        <Select
          id="period-select"
          placeholder="Количество периодов"
          options={options}
          value={periodCount}
          onChange={setPeriodCount}
        />
      </Header>

      <HistoricalTimeline eventData={filteredEvents} />
    </div>
  );
};

export default App;
