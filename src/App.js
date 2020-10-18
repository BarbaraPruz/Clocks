import React, { useReducer } from 'react';

import './App.css';

import Clock from './components/clock';
import AddClockForm from './components/addclockform';

function App() {
  const getUniqueId = () => new Date().getTime().toString(16);

  const [clocks, dispatch] = useReducer((stateClocks, action) => {
    let newState;
    switch (action.type) {
      case 'add':
        return [
          ...stateClocks,
          { timezone: `${action.payload.region}/${action.payload.zone}`, id: getUniqueId() },
        ];
      case 'delete':
        newState = stateClocks.filter((c) => c.id !== action.payload.id);
        return newState;
      default:
        return stateClocks;
    }
  }, [{ timezone: null, id: getUniqueId() }]);

  const addClock = (clockParams) => {
    dispatch({ type: 'add', payload: { region: clockParams.region, zone: clockParams.zone } });
  };

  const deleteClock = (id) => {
    dispatch({ type: 'delete', payload: { id } });
  };

  return (
    <div className="App">
      <h1>World Clocks</h1>
      <AddClockForm handleAddClock ={addClock} />
      <div className="clocks">
        {clocks.map((c) => (
          <Clock
            timezone={c.timezone || undefined}
            key={c.id}
            id={c.id}
            deleteCallback={deleteClock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
