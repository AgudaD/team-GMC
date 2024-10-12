import Testimonial from "../components/Testimonial";
import Hero from '../components/HeroSection';
import FaqsComponent from '../components/FaqsComponent';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Testimonial />
        <FaqsComponent/>
        <Footer />
    </div>
  )
}

export default HomePage