import React from "react";
import Circle from "../components/Lec6Circle";

export default {
  title: "Example/Circle",
  component: Circle,
  argTypes: {
    size: { control: "number" },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Circle {...args} />;

export const Default = Template.bind({});
