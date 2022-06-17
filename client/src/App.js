import "./App.css";
import Home from "./screens/Home";
import SelectionSort from "./screens/SelectionSort";
import BubbleSort from "./screens/BubbleSort";
import InsertionSort from "./screens/InsertionSort";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Selection%20Sort" element={<SelectionSort />} />
        <Route path="/Bubble%20Sort" element={<BubbleSort />} />
        <Route path="/Insertion%20Sort" element={<InsertionSort />} />
      </Routes>
    </div>
  );
}

export default App;
