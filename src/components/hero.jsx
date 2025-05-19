import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Content Area */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block">
              <span className="bg-[#0e4A00]/10 border border-[#0e4A00]/20 text-[#0e4A00] font-medium py-1 px-3 rounded-full text-sm">
                Innovate • Transform • Succeed
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Elevate Your Business With{" "}
              <span className="text-[#0e4A00]">Digital Excellence</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              We transform ideas into powerful digital solutions that drive
              growth and innovation for forward-thinking companies around the
              globe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#0e4A00] flex items-center gap-2 hover:bg-[#0a3800] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
                <GoArrowUpRight className=" size-5" />
              </button>
              <button className="border flex items-center gap-2 border-gray-300 hover:border-[#0e4A00] text-gray-700 hover:text-[#0e4A00] font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#0e4A00]/5">
                Learn More <IoIosArrowRoundForward className=" size-7" />{" "}
              </button>
            </div>
          </div>

          {/* Image Area */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#0e4A00]/10 rounded-2xl transform rotate-6 scale-95 -z-10"></div>
            <div className="relative overflow-hidden rounded-2xl ">
              <img
                src="https://placehold.co/600x400"
                alt="Tech Rise Digital Solutions"
                className="w-full h-full object-cover"
              />

              {/* Floating elements for visual interest */}
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#0e4A00]/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

              {/* Stats badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0e4A00] h-10 w-10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Growth Rate
                    </div>
                    <div className="text-lg font-bold text-gray-900">+127%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
