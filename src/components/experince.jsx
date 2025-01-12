import dotsImg from "../../public/assets/dots.png";

const Experience = () => {
  return (
    <div className="flex flex-col mt-16 mb-10">
      {/* Header */}
      <div className="flex w-full items-center justify-center pb-7">
        <h1 className="text-3xl font-bold py-3 md:text-5xl text-center">
          My <span className="text-orange-400">Work Experience</span>
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:gap-8 md:mx-auto lg:mx-16 items-center text-center md:text-left">
        {/* Leftside Content */}
        <div className="w-full  flex flex-col gap-12 mx-6">
          <div>
            <h2 className="text-2xl font-bold">Cognizant Mumbai</h2>
            <p className="md:mx-10">Sep 2016 - July 2020</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Sugee Pvt limited, Mumbai</h2>
            <p className="md:mx-10">Aug 2020 - Feb 2023</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Cinetstox, Mumbai</h2>
            <p className="md:mx-10">March 2023 - Jan 2025</p>
          </div>
        </div>

        {/* Center Image */}
        <div className="hidden lg:flex items-center justify-center w-full">
          <img src={dotsImg} alt="Experience" className="h-[200px] sm:h-[250px] md:h-[300px] w-auto" />
        </div>

        {/* Rightside Content */}
        <div className="hidden lg:flex w-full flex-col gap-5 mr-8">
          <div>
            <h2 className="text-2xl font-bold">Experience Designer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">UI/UX Designer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Lead Designer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
