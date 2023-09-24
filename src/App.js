import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Dash from "./components/dash";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </div>
  );
}

export default App;
