import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Hero from './components/HeroSection';
import FaqsComponent from './components/FaqsComponent';
import Footer from './components/Footer.jsx';

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
