import { useRef } from "react";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(20);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZzbcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()_+{}[]'?|";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyClickbord = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-6  my-10
      text-orange-500 bg-gray-800"
      >
        <h1 className="text-white text-center my-5 text-2xl">
          Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 pb-4">
          <input
            type="text"
            value={password}
            className="outline-none rounded-l-lg w-full py-1 px-3 pb-3"
            placeholder="password"
            ref={passwordref}
          />
          <button
            className="bg-blue-700 text-white px-4 rounded-r-lg outline-none py-0.5 shrink-0 "
            onClick={copyClickbord}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4 pb-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="cursor-pointer"
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
