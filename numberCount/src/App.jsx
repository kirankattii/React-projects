import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 100) setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter > -100) setCounter(counter - 1);
  };
  return (
    <>
      <h1>React</h1>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
export default App;
