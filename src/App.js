import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let apiUrl;

    if (process.env.NODE_ENV === "production") {
      apiUrl = "https://myapp-123354.herokuapp.com/";
    } else if (process.env.NODE_ENV === "development") {
      apiUrl = "http://localhost:5000";
    }

    console.log("making call to", apiUrl);

    fetch(apiUrl)
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
