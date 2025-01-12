import HeroSection from "../components/heroSection";
import Services from "../components/services";
import Testimonial from "../components/testimonials";
import HireMe from "../components/hireMe";
import Experience from "../components/experince";

function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <HireMe />
      <Testimonial />
      <Experience />
    </div>
  );
}

export default Home;
