import logo from "./logo.svg";
import PropTypes from "prop-types";

export default function Logo({ width, height }) {
  return (
    <img
      src={logo}
      className="App-logo"
      alt="logo"
      style={{ width, height }}
    />
  );
}

Logo.defaultProps = {
  width: "30rem",
  height: "30rem",
};

Logo.propTypes = {
  width: PropTypes.string,
};
