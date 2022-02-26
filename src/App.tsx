import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';



function App() {
  const startValue = 0;
  const maxValue = 5;

  const [count, setCount] = useState(startValue)

  const plus = () => {
    if (count < maxValue) setCount(count + 1)
  }
  const reset = () => {
    setCount(startValue)
  }


  return (

    <div>
      <Counter count={count} callBack={plus} calBackReset={reset} maxValue={maxValue} startValue={startValue} />
    </div>

  )
}

export default App;
