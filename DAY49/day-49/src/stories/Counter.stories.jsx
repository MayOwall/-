import React from "react";
import Counter from "../components/Lec6Counter";

export default {
  title: "Example/Counter",
  component: Counter,
  argTypes: {
    onPlus: { action: "counter plussed" },
    onMinus: { action: "counter minused" },
  },
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
