import heroImage from "../../public/assets/man.png";
import quoteUp from "../../public/assets/quoteUp.png";

function HeroSection() {
  return (
    <div className="relative bg-white text-black mx-4 sm:mx-12">
      <div className="container mx-auto px-4 py-14 relative flex flex-col items-center text-center">
        <h3 className="text-4xl md:text-6xl font-bold mb-4">
          I am <span className="text-orange-500">Raheel</span>
        </h3>
        <div className="text-lg lg:text-xl mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Chatter Accountant
          </h1>
        </div>
      </div>

      {/* Image with a higher z-index */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[200px] z-20">
        <img
          src={heroImage}
          alt="Woman"
          className="h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] object-cover"
        />
      </div>

      {/* Quote and Experience */}
      <div>
        <div className="absolute top-[180px] sm:top-[200px] left-[10px] sm:left-[90px] z-10 text-sm sm:text-base">
          <img src={quoteUp} alt="" />
          <p>
            Jenny’s Exceptional product design <br /> ensures our website’s
            success <br />
            .Highly Recommended{" "}
          </p>
        </div>
        <div className="absolute top-[180px] sm:top-[200px] right-[10px] sm:right-[90px] z-10 text-sm sm:text-base">
          <h1 className="mx-1">⭐⭐⭐⭐⭐</h1>
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold">08 years</h1>
          <p className="mx-5">Experience</p>
        </div>
      </div>
      <div className="absolute bg-orange-300 h-[60%] sm:h-[80%] w-[70%] sm:w-[33%] rounded-t-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[240px] z-0"></div>
    </div>
  );
}

export default HeroSection;
