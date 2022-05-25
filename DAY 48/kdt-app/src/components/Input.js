import React from "react";

const Input = React.forwardRef((_, ref) => {
  return (
    <div>
      input : <input ref={ref}/>
    </div>
  );
});

export default Input;
