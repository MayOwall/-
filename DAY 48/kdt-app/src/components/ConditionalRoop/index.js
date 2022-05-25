import { useState } from "react";

export default function ConditionalRoop() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Toggle
      </button>
      {visible && (
        <h1>논리곱 연산자를 통해 JSX 렌더링 여부를 쉽게 정할 수 있습니다</h1>
      )}
      {visible ? (
        <h1>논리곱 연산자를 통해 JSX 렌더링 여부를 쉽게 정할 수 있습니다</h1>
      ) : null}
    </div>
  );
}
