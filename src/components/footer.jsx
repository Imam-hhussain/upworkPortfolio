import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import uparrow from "../../public/assets/upRight.png"


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-t-[25px] mt-10 px-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 py-10 px-10 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-white">
            Lets Connect There
          </h1>
          <a
            href="/hire-me"
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded mt-4 lg:mt-0"
          >
          Hire Me <img src={uparrow} alt="Up Arrow" className="inline-block ml-2 h-8 w-8" />
          </a>
        </div>
        <div className="border-b border-blue-400 mb-6"></div>



    <div className="grid grid-cols-1 gap-6 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4 mx-4 md:mx-16 mb-8">
      {/* Logo and Social Links */}
      <div className="px-6 lg:px-0">
        <h3 className="text-xl font-bold mb-4 text-orange-400">LOGO</h3>
        <p className="text-sm mb-4">
          Welcome to MyWebsite, your trusted destination for quality services and products.
        </p>
        <div className="flex justify-center sm:justify-start space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500  transition-colors"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500  transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500  transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500  transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="px-2">
        <h3 className="text-xl font-bold mb-4 text-orange-400">Navigation</h3>
        <div className="flex flex-col space-y-2 mx-6">
          <a href="/" className="hover:text-yellow-500  transition-colors text-sm">
            Home
          </a>
          <a href="/about" className="hover:text-yellow-500  transition-colors text-sm">
            About
          </a>
          <a href="/services" className="hover:text-yellow-500  transition-colors text-sm">
            Services
          </a>
          <a href="/blog" className="hover:text-yellow-500 transition-colors text-sm">
            Resume
          </a>
          <a href="/contact" className="hover:text-yellow-500 transition-colors text-sm">
            Projects
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-6 lg:px-0">
        <h3 className="text-xl font-bold mb-4 text-orange-400">Contact</h3>
        <p className="text-sm mb-2">+12 456 7890</p>
        <p className="text-sm mb-2">info@mywebsite.com</p>
      </div>

<div className="px-6 lg:px-0">
  <h3 className="text-xl font-bold mb-4 text-orange-400">Get the Latest Info</h3>
  <form className="flex items-center justify-center space-x-0">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] px-3 py-2 text-sm rounded-l bg-gray-700 text-white"
    />
    <button
      type="submit"
      className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-3 sm:px-4 rounded-r"
    >
      <FaArrowRight size={20} />
    </button>
  </form>
</div>




</div>


        {/* Divider Line */}
        <div className="border-b border-blue-400 mb-6 mt-6"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <div className="text-sm mb-4">
            <p>
              &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
            </p>
          </div>
          <div className="text-sm">
            <p>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>{" "}
              |
              <a href="/privacy" className="hover:underline">
                {" "}
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
