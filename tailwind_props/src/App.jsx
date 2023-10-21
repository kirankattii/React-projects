import { useState } from "react";

import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "kiran",
    age: 21,
  };

  let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-600 inline p-3 rounded-xl text-2xl">
        tailwind test
      </h1>
      <Card username="kiran" btn="click it" />
      <Card username={"rock"} />
    </>
  );
}

export default App;
