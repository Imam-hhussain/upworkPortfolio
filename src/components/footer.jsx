import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-t-[25px] mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 py-10">
          <h1 className="text-4xl font-extrabold text-white text-center">
            Lets Connect there
          </h1>
          <a
            href="/hire-me"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded"
          >
            Hire Me
          </a>
        </div>
        <div className="border-b border-blue-400 mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-8">
          <div className="text-center md:text-left px-6">
            <h3 className="text-xl font-bold mb-4 text-orange-500">LOGO</h3>
            <p className="text-sm mb-4 py-2">
              Welcome to MyWebsite, your trusted destination for quality
              services and products. We strive to provide the best solutions
              tailored to your needs.your trusted destination for quality
              services and products.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Navigation
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                className="hover:text-blue-300 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/about"
                className="hover:text-blue-300 transition-colors text-sm"
              >
                About
              </a>
              <a
                href="/services"
                className="hover:text-blue-300 transition-colors text-sm"
              >
                Services
              </a>
              <a
                href="/blog"
                className="hover:text-blue-300 transition-colors text-sm"
              >
                Rusume
              </a>
              <a
                href="/contact"
                className="hover:text-blue-300 transition-colors text-sm"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Contact & Newsletter Section */}
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                Contact
              </h3>
              <p className="text-sm mb-2">+12 456 7890</p>
              <p className="text-sm mb-2">info@mywebsite.com</p>
              <p className="text-sm mb-2">info@mywebsite.com</p>
            </div>

            {/* Stay Updated Section */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-2 text-orange-500">
                Get the latest information
              </h1>
              <form className="flex items-center">
                {/* Input Field */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 mt-2 text-sm rounded-l mb-2 align-middle"
                  style={{ backgroundColor: "#333", color: "#fff" }}
                />
                {/* Arrow Icon */}
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r align-middle"
                >
                  <FaArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-b border-blue-400 mb-6 mt-6"></div>

        <div className="flex justify-between items-center">
          <div className="text-sm mx-12">
            <p>
              &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
            </p>
          </div>
          <div className="text-sm mx-12">
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
