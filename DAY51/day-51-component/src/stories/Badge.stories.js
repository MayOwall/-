import Badge from "../components/Badge";

export default {
  title: "Component/Badge",
  component: Badge,
  argTypes: {
    count: { defaultValue: 10, control: "number" },
    maxCount: { defaultValue: 100, control: "number" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    showZero: { defaultValue: false, control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <Badge {...args}>
      <div style={{ width: 200, height: 200, backgroundColor: "gray" }}></div>
    </Badge>
  );
};

export const Dot = () => {
  return (
    <Badge dot>
      <div style={{ width: 200, height: 200, backgroundColor: "gray" }}></div>
    </Badge>
  );
};
