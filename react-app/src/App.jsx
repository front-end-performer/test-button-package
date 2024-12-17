import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "button-wc";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleInputChange = (event) => {
      // Access the input value from the event's detail
      setInputValue(event.detail.value);
    };

    // Add an event listener to the Web Component
    const buttonElement = buttonRef.current;
    if (buttonElement) {
      buttonElement.addEventListener('input-change', handleInputChange);
    }

    // Cleanup the event listener on unmount
    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener('input-change', handleInputChange);
      }
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <my-button ref={buttonRef} background="#dea32f"></my-button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">{inputValue}</p>
    </>
  );
}

export default App;
