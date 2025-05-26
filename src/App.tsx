import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Style.css';
import './StyleRegister.css';
import Login from "./Login";
import Script from "./Script";
import Register from "./Register";
import ScriptRegister from "./ScriptRegister";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Script></Script>
      <ScriptRegister></ScriptRegister>
    </div>
  );
}

export default App;
