export default function Button({ context }) {
  const style = {
    display: "block",
    color: "white",
    backgroundColor: "black",
    border: "none",
    borderRadius: "5px",
    height: "32px",
    cursor: "pointer",
  };
  return <button style={style}>{context}</button>;
}
