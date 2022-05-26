import Input from "./Input";
import Button from "./Button";

const Lec7LoginForm = ({ onSubmit }) => {
  const style = {
    width: "300px",
    padding: "10px 30px",
    borderRadius: "10px",
    boxShadow: "0 3px 5px lightgray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //이것의 의미가 당최 무엇인가..이것은 왜 있는가..
    onSubmit && onSubmit();
  };
  return (
    <form style={style} onSubmit={handleSubmit}>
      <div>
        Name : <Input />
      </div>
      <div>
        PassWord : <Input type="password" />
      </div>
      <Button context="Login" />
    </form>
  );
};

export default Lec7LoginForm;
