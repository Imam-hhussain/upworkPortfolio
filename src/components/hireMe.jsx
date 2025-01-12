import hireImg  from "../../public/assets/hireMe.png";

const HireMe = () => {
  return (
    <div className="bg-gray-200 rounded-t-2xl py-6">
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-20">
       
        <div className="hidden lg:block">
          <img
            src={hireImg}
            alt="Hire Me"
            className="max-w-xs sm:max-w-md md:max-w-full"
          />
        </div>

        {/* Right side (Text and Button) */}
        <div className="flex flex-col justify-center items-center text-center gap-8 md:text-left">
          <div>
            <h1 className="text-2xl font-bold py-3 md:text-5xl">
              Why <span className="text-orange-500">Hire me</span>
            </h1>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              doloremque ratione beatae quae eum alias sed debitis explicabo,
              deserunt ad voluptatum nemo, enim quas soluta?
            </p>
          </div>

          {/* Completed Projects */}
          <div className="flex flex-col sm:flex-row justify-center my-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold">450+</h2>
              <p className="my-3">Completed Projects</p>
            </div>
            <div className="text-center">
              <button className="border border-gray-500 px-4 py-4 mt-4 ml-6 rounded-lg bg-orange-400 hover:bg-orange-500 hover:text-white">
                Hire me
              </button>
            </div>
          </div>

          {/* Hire Me Button */}
        </div>
      </div>
    </div>
  );
};

export default HireMe;
