import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AIDetail from "@/pages/AIDetail";
import SmartBusinessSolution from "@/pages/SmartBusinessSolution";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/ai" element={<AIDetail />} />
        <Route path="/solutions/smart-business" element={<SmartBusinessSolution />} />
      </Routes>
    </Router>
  );
}

export default App;
