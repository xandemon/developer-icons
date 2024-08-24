import "./App.css";
import { InstagramIcon, ReactIcon, MicrosoftSQLServerIcon } from "../dist/main";

function App() {
  return (
    <>
      <div>
        <ReactIcon size={150} />
        <InstagramIcon size={150} style={{ marginLeft: 30 }} />
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
      <MicrosoftSQLServerIcon size={150} />
      <p className="read-the-docs">
        Test around with <i>developer-icons</i> components here while developing
        them
      </p>
    </>
  );
}

export default App;
