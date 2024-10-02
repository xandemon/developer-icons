import "./App.css";
import { InstagramIcon, ReactIcon, DeveloperIconsIcon, RustDarkIcon, TensorflowIcon, CIcon, FlaskDarkIcon, GitHubDarkIcon } from "../dist/main";

function App() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <ReactIcon size={150} />
        <InstagramIcon size={150} />
        <DeveloperIconsIcon size={150} />
        <RustDarkIcon size={150} />
        <CIcon size={150} />
        <FlaskDarkIcon size={150} />
        <GitHubDarkIcon size={150} />
        <TensorflowIcon size={150} />
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
