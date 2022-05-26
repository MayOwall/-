import LoginForm from "../components/Lec7LoginForm";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
  argTypes : {
    onSubmit : {action : "Submitted"}
  }
};

const Template = (args) => <LoginForm {...args} />; 
export const Default = Template.bind({});
