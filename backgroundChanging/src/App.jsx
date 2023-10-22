import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-4 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full py-1 shadow-lg text-white"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ background: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ background: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ background: "brown" }}
          >
            brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
