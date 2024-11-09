import "./App.css";
import {
  Instagram,
  DeveloperIcons,
  GitHubDark,
  Zen,
  NextJsWordmark,
} from "../dist/main";

function App() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <NextJsWordmark size={150} />
        <Instagram size={150} />
        <DeveloperIcons size={150} />
        <Zen size={150} />
        <GitHubDark size={150} />
      </div>
      <h1>Developer-Icons Playground</h1>
      <div className="card">
        <a href="https://github.com/xandemon/developer-icons">
          <button>github.com/xandemon/developer-icons</button>
        </a>
        <p>
          Edit <code>playground/App.tsx</code> and save to see changes
        </p>
      </div>
      <p className="read-the-docs">
        Test around with <i>developer-icons</i> components here while developing
        them
      </p>
    </>
  );
}

export default App;
