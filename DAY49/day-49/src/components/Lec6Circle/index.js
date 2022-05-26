const Lec6Circle = ({
  size = 100,
  backgroundColor = "darkolivegreen",
}) => {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  };
  return <div style={style}></div>;
};

export default Lec6Circle;
