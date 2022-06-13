import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  const countAdd = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={countAdd}>add</button>
      <div>hello world</div>
    </div>
  );
}

export default App;
