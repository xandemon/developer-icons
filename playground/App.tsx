import { DenoFresh, FastAPI, HuggingFace, WebRTC, Clerk, Convex } from "../dist/main";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <DenoFresh size={150} />
        <FastAPI size={150} />
        <HuggingFace size={150} />
        <WebRTC size={150} />
        <Clerk size={150} />
        <Convex size={150} />
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
