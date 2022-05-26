import "./App.css";
import Logo from "./components/Logo";
import Paragraph from "./components/Paragraph";
import ConditionalRoop from "./components/ConditionalRoop";
import Board from "./components/Board";
import Counter from "./components/Counter";
import Input from "./components/Input";
import AutoCounter from "./components/AutoCounter";
import Lec9Board from "./components/Lec9Board";
import { useState, useEffect, useRef } from "react";
import Lec9Pagination from "./components/Lec9Pagination";

function App() {
  const name = "리액트";
  const showLink = true;
  const showLogo = true;
  const arr = ["Love", "and", "Thunder"];
  const boardData = [
    {
      id: 1,
      title: "안녕하시와요",
      author: "mayOwall",
    },
    {
      id: 2,
      title: "감사하와요",
      author: "mayOwall",
    },
    {
      id: 3,
      title: "잘있사와요",
      author: "mayOwall",
    },
    {
      id: 4,
      title: "다시만나와요",
      author: "mayOwall",
    },
    {
      id: 5,
      title: "안녕하시와요",
      author: "mayOwall",
    },
    {
      id: 6,
      title: "아따맘마다요",
      author: "mayOwall",
    },
  ];
  let [totalCount, setTotalCount] = useState(0);
  const [lec7Count, setLec7Count] = useState(0);
  useEffect(() => {
    console.log(lec7Count);
  }, [lec7Count]);
  useEffect(() => {
    console.log("component is loaded");
    const scrollLogger = () => {
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", scrollLogger);
    return () => {
      document.removeEventListener("scroll", scrollLogger);
    };
  }, []);

  const lec8InputRef = useRef();
  const lec9boardData = new Array(50).fill().map((_, i) => ({
    id: i,
    title: `${i}번째 게시물`,
  }));
  const [lec9Page, setLec9Page] = useState(0);
  const lec9Limit = 5;
  const lec9Offset = lec9Page * lec9Limit;

  return (
    <div className="App">
      <ConditionalRoop />
      <Board boardData={boardData} />
      <header className="App-header">
        {showLogo === true ? (
          <Logo width="10rem" height="20rem" />
        ) : (
          <h1>React</h1>
        )}
        {showLogo === true ? <Logo /> : <h1>React</h1>}
        <Paragraph color="blue">
          Edit <code>src/AParagraph color="blue"p.js</code> and save to reload.
        </Paragraph>
        {showLink && (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn {name}
          </a>
        )}
        <div>and I wanna...</div>
        {arr.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </header>
      <div className="lecture6">
        <h3>lecture6</h3>
        <h4>Total Count : {totalCount}</h4>
        <Counter
          onChange={(data) => {
            setTotalCount(totalCount + data);
          }}
        />
        <Counter
          onChange={(data) => {
            setTotalCount(totalCount + data);
          }}
        />
        <Counter
          onChange={(data) => {
            setTotalCount(totalCount + data);
          }}
        />
        <Counter
          onChange={(data) => {
            setTotalCount(totalCount + data);
          }}
        />
      </div>
      <div className="lecture7">
        <h3>lecture7</h3>
        <div>
          You clicked lec7 button for "<b>{lec7Count}</b>" times
        </div>
        <button
          onClick={() => {
            setLec7Count(lec7Count + 1);
          }}
        >
          lec7 button
        </button>
      </div>
      <div className="lecture8">
        <Input ref={lec8InputRef} />

        <button onClick={() => lec8InputRef.current.focus()}>
          input focus
        </button>
        <AutoCounter />
      </div>
      <div className="lecture9">
        <Lec9Board boardData={lec9boardData.slice(lec9Offset, lec9Offset + lec9Limit)} />
        <Lec9Pagination
          defaultPage={0}
          limit={lec9Limit}
          total={lec9boardData.length}
          onChange={setLec9Page}
        />
      </div>
    </div>
  );
}

export default App;
