import dotsImg from '../../public/assets/dots.png'


const Experience = () => {
  return (
    <div className="flex flex-col mt-16 mb-10 ">
      <div className="flex w-full items-center justify-center pb-7">
        <h1 className=" text-2xl font-bold py-3 md:text-5xl">
          My <span className="text-orange-500"> Work Experience</span>
        </h1>
      </div>
      <div className="flex gap-8 mx-20">
        {/* leftside div  */}
        <div className="w-1/3 flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-bold">Cognizant Mumbai</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quod.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Cognizant Mumbai</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quod.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Cognizant Mumbai</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quod.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/3 ">
          <img src={dotsImg} alt="" className="h-[300px]" />
        </div>
      
        <div className="w-1/3 flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-bold">Cognizant Mumbai</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quod.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Cognizant Mumbai</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quod.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Cognizant Mumbai</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience
