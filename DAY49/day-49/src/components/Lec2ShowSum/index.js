import { useMemo } from "react";
function sum(n) {
  console.log("sum is started");
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log("sum is finished");
  return result;
}

export default function Lec2ShowSum({ label, n }) {
  const result = useMemo(() => sum(n), [n]);
  return (
    <span>
      {label} : {result}
    </span>
  );
}
