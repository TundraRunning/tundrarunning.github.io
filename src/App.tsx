import tundraLogo from "./assets/TundraRunning.png";
import PWABadge from "./PWABadge.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={tundraLogo} className="logo" alt="Tundra Running logo" />
      </div>
      <PWABadge />
    </>
  );
}

export default App;
