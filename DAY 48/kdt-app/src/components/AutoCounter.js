import { useState, useRef } from "react";

export default function AutoCounter() {
  const [count, setCount] = useState(0);
  const intervalId = useRef();

  const startButtonClick = () => {
    intervalId.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const stopButtonClick = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={startButtonClick}>start</button>
      <button onClick={stopButtonClick}>stop</button>
    </>
  );
}
