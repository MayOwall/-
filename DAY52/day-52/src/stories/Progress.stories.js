import Progress from "../components/Progress";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    value: { defaultValue: 50, control: "number" },
    onChange: { action: "onChange" },
  },
};

export const Default = (args) => {
  return <Progress {...args} />;
};
