import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Organizations from "./pages/Organizations";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false)
    }, 3000);

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
  {isLoading ? (<LoadingScreen />) : (<div>
      <Navbar />
      <div className="px-12 py-6">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/organizations" element={<Organizations />} />
        </Routes>
      </div>
      <Footer/>
    </div>)}
    </>
  );
}

export default App;
