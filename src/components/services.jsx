import uiux from "../../public/assets/serviceImage.png";
function Services() {
  return (
    <div className="mt-[210px] bg-gray-800 text-white rounded-3xl">
      <div className="text-white">
        <div className="flex justify-between mx-20 pt-20">
          <h1 className="text-4xl font-bold">My <span className="text-orange-500">Services</span> </h1>
          <p className="text-sm mb-4 py-2">
            Welcome to MyWebsite, your trusted destination for quality
            <br />
            services and products. We strive to provide the best solutions.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-20 py-8">
        <div className=" overflow-hidden border rounded-3xl border-gray-500 mb-12  ">
          <h2 className="text-xl font-bold mb-4 text-center pt-5">UI/UX Design</h2>
          <hr className="border-t-2 border-gray-500 mb-4" />
          <img src={uiux} alt="UI/UX Design" className="w-full mt-6" />
        </div>

        <div className=" overflow-hidden border rounded-3xl border-gray-500 mb-12  ">
          <h2 className="text-xl font-bold mb-4 text-center pt-5">Web Dev</h2>
          <hr className="border-t-2 border-gray-500 mb-4" />
          <img src={uiux} alt="UI/UX Design" className="w-full mt-6" />
        </div>
        <div className=" overflow-hidden border rounded-3xl border-gray-500 mb-12  ">
          <h2 className="text-xl font-bold mb-4 text-center pt-5">App Dev</h2>
          <hr className="border-t-2 border-gray-500 mb-4" />
          <img src={uiux} alt="UI/UX Design" className="w-full mt-6" />
        </div>
      </div>
    </div>
  );
}

export default Services;
