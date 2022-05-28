import Spacer from "../components/Spacer";

export default {
  title: "Components/Spacer",
  component: Spacer,
  argTypes: {
    size: {
      defaultValue: 8,
      control: { type: "range", min: 8, max: 64 },
    },
  },
};

const Box = ({ block, style }) => {
  return (
    <div
      style={{
        display: block ? "block" : "inline-block",
        width: 100,
        height: 100,
        backgroundColor: "darkolivegreen",
        ...style,
      }}
    ></div>
  );
};

export const Horizontal = (args) => {
  return (
    <Spacer {...args} type="horizontal">
      <Box block />
      <Box block />
      <Box block />
    </Spacer>
  );
};

export const Vertical = (args) => {
  return (
    <Spacer {...args} type="vertical">
      <Box />
      <Box />
      <Box />
    </Spacer>
  );
};
