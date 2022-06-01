import Image from "../components/Image";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: {
      name: "src",
      type: { name: "string", require: true },
      defaultValue: "https://picsum.photos/200",
      control: { type: "text" },
    },
    width: {
      name: "width",
      defaultValue: 200,
      control: { type: "range", min: 100, max: 600 },
    },
    height: {
      name: "height",
      defaultValue: 200,
      control: { type: "range", min: 100, max: 600 },
    },
    alt: {
      name: "alt",
      control: { type: "string" },
    },
    mode: {
      name: "mode",
      options : ["cover", "fill", "contains"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args) => {
  return <img {...args} />;
};
