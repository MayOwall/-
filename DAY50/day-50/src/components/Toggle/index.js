const Toggle = ({ name, on = false, disabled, onChange, ...props }) => {
  const labelStyle = {
    display: "inline-block",
    cursor: "pointer",
    userSelect: "none",
  };
  const divStyle = {
    boxSizing: "border-box",
    width: 64,
    height: 64,
    padding: 2,
    borderRadius: 32,
    backgroundColor: "gray ",
  };
  return (
    <label style={labelStyle} {...props}>
      <input type="checkbox" style={{ display: "none" }} />
      <button>Check!</button>
    </label>
  );
};

export default Toggle;
