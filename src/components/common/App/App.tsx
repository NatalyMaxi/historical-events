import { useState } from 'react';

import { Header, HistoricalTimeline, Select } from 'components';
import { historicalEvents, options } from 'utils/constants';

import styles from './App.module.scss';

const App = () => {
  const [periodCount, setPeriodCount] = useState<number | ''>('');
  const [showExtraTimeline, setShowExtraTimeline] = useState(false);

  const filteredEvents =
    typeof periodCount === 'number' ? historicalEvents.slice(0, periodCount) : historicalEvents;

  return (
    <div className={styles.app}>
      <Header>
        <div className={styles.controls}>
          <label className={styles.label}>
            <input
              type="checkbox"
              checked={showExtraTimeline}
              onChange={() => setShowExtraTimeline((prev) => !prev)}
            />
            Добавить секцию
          </label>
          {!showExtraTimeline && (
            <Select
              id="period-select"
              placeholder="Количество периодов"
              options={options}
              value={periodCount}
              onChange={setPeriodCount}
            />
          )}
        </div>
      </Header>

      <HistoricalTimeline eventData={filteredEvents} />

      {showExtraTimeline && <HistoricalTimeline eventData={filteredEvents} />}
    </div>
  );
};

export default App;
