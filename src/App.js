import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="search" />
        </main>
        <footer className="App-footer">
          <small></small>
        </footer>
      </div>
    </div>
  );
}
