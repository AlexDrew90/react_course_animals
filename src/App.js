import { useState } from 'react';

const App = () => {

const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
};

  return(
  <div>
  <button onClick={handleClick}>Add animal</button>;
  <div>Number of animals is: {count}</div>
  </div>);
}

export default App;
