import Skeleton from "../components/Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
};

export const Box = (args) => <Skeleton.Box {...args} />;
Box.argTypes = {
  width: { defaultValue: 200, control: "number" },
  height: { defaultValue: 100, control: "number" },
};
