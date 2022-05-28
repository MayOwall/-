import Spinner from "../components/Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 50,
      control: { type: "range", min: 10, max: 100 },
    },
    color: {
      defaultValue: "lightgray",
      control: { type: "color" },
    },
  },
};

export const Default = (args) => {
  return <Spinner {...args}></Spinner>;
};
