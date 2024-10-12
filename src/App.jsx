import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Organizations from "./pages/Organizations";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/organizations" element={<Organizations />} />
      </Routes>
    </div>
  );
}

export default App;
