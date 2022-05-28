const Spinner = ({
  size = 50,
  color = "lightgray",
  loading = true,
  ...props
}) => {
  const sizeStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: size / 2,
  };
  return loading ? (
    <div style={{ ...props.style, ...sizeStyle }} {...props}>
      spinnnn
    </div>
  ) : null;
};

export default Spinner;
