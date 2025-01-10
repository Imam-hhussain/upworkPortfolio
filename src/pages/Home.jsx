import HeroSection from "../components/heroSection"
import Services from "../components/services"
import Testimonial from "../components/testimonials"
import HireMe from "../components/hireme"
import Experience from "../components/experince"
function Home() {
  return (
    <div>
      <HeroSection/>
       <Services/>
      <Experience/>
       <HireMe/>
       <Testimonial/>
    </div>
  )
}

export default Home
