import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Organizations from "./pages/Organizations";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

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
      <Footer/>
    </div>
  );
}

export default App;
