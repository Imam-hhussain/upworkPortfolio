import heroImage from "../../public/assets/man.png";
import quoteUp from "../../public/assets/quoteUp.png";

function HeroSection() {
  return (
    <div className="relative bg-white text-black mx-4 sm:mx-12">
      {/* Container */}
      <div className=" mx-auto px-4 py-14 flex flex-col items-center text-center">
        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          I am <span className="text-orange-400">Raheel</span>
        </h3>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
          Chartered Accountant
        </h1>
      </div>

      {/* Hero Image */}
      <div className="absolute top-[119px] sm:top-[110px] md:top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img
          src={heroImage}
          alt="Hero"
          className="h-50%  sm:h-[250px] md:h-[300px] sm:w-[250px] md:w-[300px] mt-[425px] sm:mt-[430px] object-cover"
        />
      </div>

      {/* Quote Section */}
<div className="absolute top-[155px] lg:ml-[100px] sm:top-[180px]  z-10 text-center text-[10px] sm:text-sm md:text-base">
  <img
    src={quoteUp}
    alt="Quote"
    className="sm:w-[50px] md:w-[75px]"
  />
  <p className="leading-tight">
    Jenny’s exceptional product design <br />
    ensures our website’s success. <br />
    Highly recommended!
  </p>
</div>

{/* Experience Section */}
<div className="absolute top-[160px] right-[30px] sm:top-[200px] lg:right-[120px] sm:right-[40px] z-10 text-center text-[10px] sm:text-sm md:text-base">
  <h1 className="text-xs sm:text-base">⭐⭐⭐⭐⭐</h1>
  <h1 className="text-lg sm:text-xl md:text-4xl font-bold">08 years</h1>
  <p className="text-xs sm:text-base">Experience</p>
</div>


      {/* Background Shape */}
      <div className="absolute bg-orange-400 h-[70%] w-[70%] lg:h-[90%]  sm:h-[80%] md:h-[90%] md:w-[50%]  sm:w-[50%] lg:w-[30%] rounded-t-full top-[368px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 lg:mt-[261px] md:top-[116px] sm:mt-[261px]"></div>
    </div>
  );
}

export default HeroSection;
