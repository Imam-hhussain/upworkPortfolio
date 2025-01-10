import Slider from "react-slick";
import ImageTestimonial from "../../public/assets/imageTestomonials.png"; // Replace with the actual path to your image file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    {
      image: ImageTestimonial,
      name: "John Doe",
      text: "This product exceeded my expectationing! s.",
      specialized: "UI/UX Designer",
      rating: 5,
    },
    {
      image: ImageTestimonial,
      name: "Jane Smith",
      text: "Great quality. Highly recommend!",
      specialized: "Product Manager",
      rating: 4,
    },
    {
      image: ImageTestimonial,
      name: "Alice Brown",
      text: "Loved it! Will definitely buy again.",
      specialized: "Developer",
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, // Disable navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-800 rounded-2xl">
      <div>
        <h1 className="text-center text-white font-medium text-4xl">
          Testimonials That <br /> Speak to My{" "}
          <span className="text-orange-500">Results</span>
        </h1>
        <p className="text-center text-white pt-4 py-10">
          This product is amazing! Totally exceeded my expectations. This
          product <br /> is amazing! Totally exceeded my expectations.
        </p>
      </div>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-600 border-2 rounded-lg shadow-md mt-12 mb-16 p-6 " 
          >

            <div className="flex text-white">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mx-2 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                {testimonial.name} <br />
                <span className="text-sm">{testimonial.specialized}</span>
              </h3>
            </div>
            <div className="text-white">
              <div className="flex">
                {"⭐".repeat(testimonial.rating)}
                <h2 className="px-3">5.0</h2>
              </div>
              <p className="text-white mb-4">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
