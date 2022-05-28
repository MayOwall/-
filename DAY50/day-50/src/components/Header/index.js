import PropTypes from "prop-types";

const Header = ({
  children,
  level = 1,
  strong,
  underline,
  color,
  ...props
}) => {
  let Tag = `h${level}`;
  if (level < 1) {
    console.warn("Header only accept 1-6");
    Tag = "h6";
  } else if (level > 6) {
    console.warn("Header only accept 1-6");
    Tag = "h1";
  }

  const fontStyle = {
    fontWeight: strong ? "bold" : "normal",
    textDecoration: underline ? "underline" : undefined,
    color,
  };
  return <Tag style={{ ...fontStyle, ...props }}>{children}</Tag>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  strong: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.string,
};

export default Header;
