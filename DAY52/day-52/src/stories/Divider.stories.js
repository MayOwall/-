import Divider from "../components/Divider";

export default {
  title: "Components/Divider",
  component: Divider,
};

export const Horizontal = () => {
  return (
    <div>
      <div>위</div>
      <Divider type="horizontal" />
      <div>아래</div>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div>
      <span>왼쪽</span>
      <Divider type="vertical" />
      <span>오른쪽</span>
    </div>
  );
};
