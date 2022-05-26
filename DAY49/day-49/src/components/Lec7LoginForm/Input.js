export default function Input({ type = "text" }) {
  const style = {
    display : "block",
    margin: "2px 10px",
    padding: "0 10px",
    height: 24,
    border: "1px solid lightgray",
    borderRadius: "5px",
    backgroundColor: "white",
  };
  return <input style={style} type={type} />;
}
