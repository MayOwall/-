import PropTypes from "prop-types";

export default function Paragraph({ children, size = 16, color = "black" }) {
  return <p style={{ fontSize: size, color }}>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};
