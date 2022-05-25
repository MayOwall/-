import "./App.css";
import Logo from "./components/Logo";
import Paragraph from "./components/Paragraph";

function App() {
  const name = "리액트";
  const showLink = true;
  const showLogo = true;
  const arr = ["Love", "and", "Thunder"];

  return (
    <div className="App">
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
