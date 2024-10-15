import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Organizations from "./pages/Organizations";

function App() {
  return (
  <div>
      <Navbar />
      <div className="px-12 py-6">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/organizations" element={<Organizations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
