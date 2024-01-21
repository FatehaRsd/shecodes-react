import "./App.css";
import WeatherSearch from "./search";

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Weather App</h1>
        <h2>
          <WeatherSearch />
        </h2>
      </div>
      <div className="Footer">
        <p>
          Coded by FatehaRsd.
          <a
            href="https://github.com/FatehaRsd/shecodes-react"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
