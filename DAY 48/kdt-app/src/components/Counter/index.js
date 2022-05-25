/*
Counter 컴포넌트의 기능
1. 증감 기능
2. 부모 컴포넌트에게 데이터(메세지) 를 보내는 기능
*/
import { useState } from "react";
import PropTypes from "prop-types";

export default function Counter({ onChange }) {
  const [count, setCount] = useState(0);

  const plusButtonClick = () => {
    setCount(count + 1);
    if (onChange) {
      onChange(1);
    }
  };
  const minusButtonClick = () => {
    setCount(count - 1);
    if (onChange) {
      onChange(-1);
    }
  };
  return (
    <div>
      {count}
      <button onClick={plusButtonClick}>plus</button>
      <button onClick={minusButtonClick}>minus </button>
    </div>
  );
}

Counter.propTypes = {
  onChange: PropTypes.func,
};
