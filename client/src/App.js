import "./App.css";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Selection%20Sort" element={<h2>selection sort</h2>} />
        <Route path="/Bubble%20Sort" element={<h2>selection sort</h2>} />
        <Route path="/Insertion%20Sort" element={<h2>selection sort</h2>} />
      </Routes>
    </div>
  );
}

export default App;
