import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {getService} from "./tools";

function App() {
  const [loading, setLoading] = useState(false);

  const getSomeService = () => {
    setLoading(true);
    getService("/")
      .then((result) => {
        console.log(result)
      })
      .finally(() => setLoading(false));

  }

  useEffect(() => {
    getSomeService();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          {loading ? "Уншиж байна" : "Уншиж дууслаа"}
        </p>
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
