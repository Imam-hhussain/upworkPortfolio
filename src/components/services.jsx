import uiux from "../../public/assets/serviceImage.png";

function Services() {
  return (
    <div className="mt-[240px] bg-gray-800 text-white rounded-3xl">
{/* Top Section */}
<div className="text-white">
  <div className="mx-4 mb-8 sm:mx-[130px] pt-20 text-center md:text-left flex justify-between md:flex-row flex-col items-center md:items-start">
    {/* Title */}
    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
      My <span className="text-orange-400">Services</span>
    </h1>
    {/* Description */}
    <p className="text-sm sm:text-base">
      Welcome to MyWebsite, your trusted destination for quality
      <br />
      services and products. We strive to provide the best solutions.
    </p>
  </div>
</div>




      {/* Services Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-20 py-8">
        {/* Card 1 */}
        <div className="overflow-hidden border rounded-3xl border-gray-500 p-3 sm:p-5 mx-auto">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center pt-2">
            UI/UX Design
          </h2>
          <hr className="border-t-2 border-gray-500 mb-4" />
          <img
            src={uiux}
            alt="UI/UX Design"
            className="w-[350px] h-[320px] sm:w-[300px] sm:h-[250px] mx-auto object-contain"
          />
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden border rounded-3xl border-gray-500 p-3 sm:p-5 mx-auto">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center pt-2">
            Web Dev
          </h2>
          <hr className="border-t-2 border-gray-500 mb-4" />
          <img
            src={uiux}
            alt="Web Development"
             className="w-[350px] h-[320px] sm:w-[300px] sm:h-[250px] mx-auto object-contain"
          />
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden border rounded-3xl border-gray-500 p-3 sm:p-5 mx-auto">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center pt-2">
            App Dev
          </h2>
          <hr className="border-t-2 border-gray-500 mb-4" />
          <img
            src={uiux}
            alt="App Development"
              className="w-[350px] h-[320px] sm:w-[300px] sm:h-[250px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
