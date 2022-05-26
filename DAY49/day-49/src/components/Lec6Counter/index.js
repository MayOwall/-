import { useState } from "react";

const Lec6Counter = ({ onPlus, onMinus }) => {
  const [count, setCount] = useState(0);
  const countMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
      onMinus();
    }
  };
  const countPlus = () => {
    setCount(count + 1);
    onPlus();
  };

  return (
    <div>
      <button onClick={countMinus}>minus</button>
      <span>{count}</span>
      <button onClick={countPlus}>plus</button>
    </div>
  );
};

export default Lec6Counter;
