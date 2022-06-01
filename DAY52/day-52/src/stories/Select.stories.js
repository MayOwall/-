import Select from "../components/Select";

export default {
  title: "Component/Select",
  component: Select,
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text",
    },
    placeholder: {
      defaultValue: "Placeholder",
      control: "text",
    },
    block: {
      defaultvalue: false,
      control: "boolean",
    },
    invalid: {
      defaultvalue: false,
      control: "boolean",
    },
    disabled: {
      defaultvalue: false,
      control: "boolean",
    },
    required: {
      defaultvalue: false,
      control: "boolean",
    },
  },
};

export const Default = (args) => (
  <Select
    data={["Item 3", "Item 2", { label: "Item 3", value: "value" }]}
    {...args}
  />
);
