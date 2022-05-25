import "./App.css";
import Logo from "./components/Logo";
import Paragraph from "./components/Paragraph";
import ConditionalRoop from "./components/ConditionalRoop";
import Board from "./components/Board";

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
    </div>
  );
}

export default App;
