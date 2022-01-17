import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("https://myapp-123354.herokuapp.com/")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(process.env.NODE_ENV);
        setMsg(json.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{msg}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
