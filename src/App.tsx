import React, { useCallback, useState } from 'react';
import './App.css';
import Hello from './components/Hello/Hello';
import Square from './components/square/Square';

interface IAppProps {
};

const App: React.FC<IAppProps> = () => {
  const [count, setCount] = useState<number>(0);
  const favoriteNums = useState<number[]>([10, 30, 90])[0];

  const incrementCountHandler = useCallback((): void => {
    setCount(prevCount => prevCount+1);
  }, [ setCount ]);

  const setCountHandler = useCallback((newCount?: number): void => {
    if(!newCount) {
      return;
    }
    setCount(newCount);
  }, [ setCount ]);

  return (
    <div className="App">
      <input
        type="number"
        value={count}
        onChange={(event: any): void => {setCountHandler(parseInt(event.target.value))}}
        autoFocus
      />

      <Hello
        incrementCount={incrementCountHandler}
      />

      <p>count: {count}</p>

      <hr/>

      {
        favoriteNums.map((num, key) => {

          return (
            <Square
              key={key}
              count={num}
              increment={setCountHandler}
            />
          )
        })
      }
    </div>
  );
}

export default App;
