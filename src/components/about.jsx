import techImage from "../assets/techImage.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="mb-10 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About <span className="text-[#0e4A00]">Tech Rise</span>
              </h2>
              <div className="w-24 h-1 bg-[#0e4A00]  rounded-full"></div>
            </div>

            <p className="text-gray-600 text-md leading-relaxed">
              TechRise Africa is a vibrant virtual community dedicated to
              unlocking the full potential of African tech talent. We believe
              Africa’s future lies in the hands of its innovators, creators, and
              problem-solvers — and we’re here to empower them with the skills,
              mentorship, and resources needed to thrive in the digital economy.
            </p>

            <p className="text-gray-600 text-md leading-relaxed">
              <p>
                Founded witha vision to connect, equip, and uplift, TechRise
                AFrica is more than just a platform - its a movement. We focus
                on pratical skill-building, growth opportunities, and real-world
                guidance that help our members not just learn, but monetize
                their talents and create impact.
              </p><br />

              <p>
                We don't just teach tech; we build confidence, foster
                creativity, and nuture leadership. Whether you're a beginner
                eager to braek into the tech scene, a freelancer looking to
                scale your income, or an enterpreneur ready to launch your
                digital venture. TechRise Africa is your go-to communityfor
                growth, support, and collaboration.
              </p><br />

              <p>Our mission is clear: To spark a digital revolution across Africa by equipping thousands of young talents witth future-ready skills, connectingthem to mentors and peers, inspiring a culture of innovation that resonates beyond borders.</p><br />
              <p>
                Join TechRise Africa and rise with thewave of Africa's tech rovolution.
              </p>
            </p>

            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#0e4A00] transition-colors">
                <div className="text-[#0e4A00] font-bold text-3xl">200</div>
                <div className="text-gray-600">Community Members</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#0e4A00] transition-colors">
                <div className="text-[#0e4A00] font-bold text-3xl">95%</div>
                <div className="text-gray-600">Community Satisfaction</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#0e4A00] transition-colors">
                <div className="text-[#0e4A00] font-bold text-3xl">45+</div>
                <div className="text-gray-600">Tech Experts</div>
              </div>
            </div>
          </div>

          {/* Right image column */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative pattern */}
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-gray-100 rounded-lg hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0e4A00]/10 rounded-lg hidden lg:block"></div>

              {/* Main image */}
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={techImage}
                  alt="Tech Rise Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating achievement badge */}
              <div className="absolute bottom-6 -left-4 md:bottom-8 md:-left-8 bg-white shadow-lg rounded-lg p-4 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0e4A00] rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Top Tech Innovator
                    </div>
                    <div className="text-sm text-gray-500">2022-2024</div>
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

export default About;
