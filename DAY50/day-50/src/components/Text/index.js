const text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  deleteline,
  color,
  mark,
  code,
  ...props
}) => {
  const Tag = block ? "div" : paragraph ? "paragraph" : "span";
  const fontStyle = {
    fontSize: size,
    fontWeight: strong ? 900 : 400,
    textDecoration: underline ? "underline" : undefined,
    color,
  };
  if (mark) {
    children = <mark>{children}</mark>;
  }
  if (code) {
    children = <code>{children}</code>;
  }
  if (deleteline) {
    children = <del>{children}</del>;
  }
  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  );
};

export default text;
