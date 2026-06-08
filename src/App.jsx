import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Anasayfa from "./views/Anasayfa";
import Sepetim from "./views/Sepetim";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/cart" element={<Sepetim />} />
      </Routes>
    </div>
  );
}

export default App;
