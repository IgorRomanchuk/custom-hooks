import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useToggle from "./hooks/useToggle.ts";
import useLocalStorage from "./hooks/useLocalStorage.ts";
import { productsMocks } from "./mocks";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [showContent, setShowContent] = useToggle(true);
  const { items, setItems } = useLocalStorage("cars");

  const setCars = (id: number) => {
    const car = productsMocks.find((item) => item.id === id);
    car && setItems([...items, car]);
  };

  return (
    <>
      {showContent && (
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
          <button onClick={() => navigate("/inputs")}>nav to inputs</button>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
          {items.map((item) => (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }} key={item.id}>
              <div>{item.title}</div>
              <p>{item.price}</p>
            </div>
          ))}
        </>
      )}
      <button onClick={setShowContent}>show content</button>
      {productsMocks.map((item) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }} key={item.id}>
          <div>{item.title}</div>
          <p>{item.price}</p>
          <button onClick={() => setCars(item.id)}>add to card</button>
        </div>
      ))}
    </>
  );
}

export default App;
