import { Bluesky, PnpmLight, PnpmDark, PnpmDarkWordmark, PnpmLightWordmark } from "../dist/main";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 30, backgroundColor: '#FFFFFF', padding: '10px' }}>
        <PnpmDark size={150} />
        <PnpmDarkWordmark size={150} />
        <Bluesky size={150} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 30, backgroundColor: '#0A0A0A', padding: '10px' }}>
        <PnpmLight size={150} />
        <PnpmLightWordmark size={150} />
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
