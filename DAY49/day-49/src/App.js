import "./App.css";
import Lec1Box from "./components/Lec1Box";
import Lec2ShowSum from "./components/Lec2ShowSum";
import Lec3Box from "./components/Lec3Box";
import { useState, useCallback } from "react";
import Lec4CheckBox from "./components/Lec4CheckBox";
import useToggle from "./hooks/useToggle";

function App() {
  const [lec2Label, setLec2Label] = useState("result");
  const [lec3Count, setLec3Count] = useState(0);
  const [lec4TomatoOn, setLec4TomatoOn] = useState(false);
  const [lec4PotatoOn, setLec4PotatoOn] = useState(false);
  const [lec4OnionOn, setLec4OnionOn] = useState(false);
  const lec4TomatoChange = useCallback((e) => {
    setLec4TomatoOn(e.target.checked);
  }, []);
  const lec4PotatoChange = useCallback((e) => {
    setLec4PotatoOn(e.target.checked);
  }, []);
  const lec4OnionChange = useCallback((e) => {
    setLec4OnionOn(e.target.checked);
  }, []);
  const [lec5On, lec5Toggle] = useToggle();

  return (
    <div className="App">
      <h1>Here is DAY 49</h1>
      <Lec1Box backgroundColor="tomato" />
      <div className="lec2">
        <Lec2ShowSum label={lec2Label} n={10000} />
        <button onClick={() => setLec2Label(lec2Label + "+")}>
          label change
        </button>
      </div>
      <div className="lec3">
        <Lec3Box />
        {lec3Count}
        <button onClick={() => setLec3Count(lec3Count + 1)}>count up</button>
      </div>
      <div className="lec4">
        <Lec4CheckBox
          label="tomato"
          on={lec4TomatoOn}
          onChange={lec4TomatoChange}
        />
        <Lec4CheckBox
          label="potato"
          on={lec4PotatoOn}
          onChange={lec4PotatoChange}
        />
        <Lec4CheckBox
          label="onion"
          on={lec4OnionOn}
          onChange={lec4OnionChange}
        />
      </div>
      <div className="lec5">
        <button onClick={lec5Toggle}>{lec5On ? "true" : "false "}</button>
      </div>
    </div>
  );
}

export default App;
