import React, { useState, useEffect, useCallback } from "react";
import Button from "./components/Button";
import logo from "./logo.svg";
import "./App.css";

const generateData = () => {
  return [{ a: 1 }, { b: 1 }, { c: 2 }];
};

function App() {
  const [count, setCount] = useState(0);
  const [countText, setCountText] = useState(`count is ${count}`);
  const data = generateData();
  const onClickCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    setCountText(`count is ${count}`);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        <Button
          buttonText={countText}
          onClickCallback={onClickCallback}
          countHistory={data}
        />
        {/* <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
