import React from "react";

const Lec3Box = React.memo(() => {
  console.log("Lec3Box is rendering");
  const style = {
    width: "100px",
    height: "100px",
    color: "white",
    fontWeight: 700,
    backgroundColor: "darkolivegreen",
  };

  return <div style={style}>this is Lec3Box</div>;
});

export default Lec3Box;
