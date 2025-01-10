import hireImg from "../../public/assets/hireMe.png";
const HireMe = () => {
  return (
    <div className="flex flex-col bg-gray-200 rounded-t-2xl md:flex-row justify-center items-center">
      {/* left side  */}
      <div className="my-5 md:p-20">
        <img src={hireImg} alt="" />
      </div>
      {/* right side  */}

      <div className="flex flex-col px-3  justify-center md:w-1/2 md:max-w-1/2">
        <div>
          <h1 className="text-2xl font-bold py-3 md:text-5xl ">
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
        <div className="flex  gap-24 my-10">
          <div>
            <h2 className="text-3xl font-bold">450+</h2>
            <p className="my-3">Completed Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">450+</h2>
            <p className="my-3">Completed Projects</p>
          </div>
        </div>

        {/* hire me button  */}
        <div>
          <button className="border border-gray-500 px-8 py-4 rounded-lg hover:bg-orange-300 hover:text-white ">
            Hire me{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
