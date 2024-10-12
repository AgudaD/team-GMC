import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Hero from './components/HeroSection';
import FaqsComponent from './components/FaqsComponent';
import Footer from './components/Footer.jsx';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonial />
      <FaqsComponent/>
      <Footer />
    </div>
  );
}

export default App;
