import ceo from "../assets/ceoImage.jpg";
import moderator from "../assets/moderatorImage.jpg";
import techlead from "../assets/techleadimage2.jpg";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#0e4A00]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#0e4A00] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            TechRise Africa runs with purpose. Every program we offer is
            intentional — built to equip, elevate, and empower Africa’s next
            generation of digital trailblazers. Here's how we grow our people,
            week in and week out.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border-t-4 border-[#0e4A00]">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Weekly Tech Career Compass
            </h3>
            <p className="text-gray-600">
              A guided weekly series helping beginners and explorers navigate
              the digital world — uncovering tech career paths, opportunities,
              and insider tips to help members find their focus and move with
              clarity.
            </p>
          </div>

          {/* Service card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border-t-4 border-[#0e4A00]">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Weekly Women in Tech
            </h3>
            <p className="text-gray-600">
              A spotlight and support hub for African women in tech. We share
              stories, insights, and strategies to inspire more women to rise,
              thrive, and lead boldly in digital spaces.
            </p>
          </div>

          {/* Service card 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border-t-4 border-[#0e4A00]">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Skill-Up Track
            </h3>
            <p className="text-gray-600">
              Hands-on, beginner-friendly learning tracks in core digital skills
              like design, development, content creation, digital marketing, and
              more — with real-life projects and community challenges.
            </p>
          </div>

          {/* Service card 4 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border-t-4 border-[#0e4A00]">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Volunteer & Leadership Program
            </h3>
            <p className="text-gray-600">
              An opportunity for members to lead, contribute, and build
              real-world experience while growing within the TechRise Africa
              ecosystem. Here, we don’t just build followers — we raise leaders.
            </p>
          </div>

          {/* Service card 5 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border-t-4 border-[#0e4A00]">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Community Members Week
            </h3>
            <p className="text-gray-600">
              A special week to celebrate, feature, and reward our members. From
              talent showcases to spotlight interviews and giveaways, it’s all
              about highlighting the people behind the growth.
            </p>
          </div>

          {/* Service card 6 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border-t-4 border-[#0e4A00]">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Resource Vault
            </h3>
            <p className="text-gray-600">
              A rich library of tools, templates, recordings, guides, and
              helpful links to fuel your tech journey anytime, anywhere. Built
              for self-paced learners and lifelong doers.
            </p>
          </div>
        </div>

        <div>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            TechRise Africa runs with purpose. Every program we offer is
            intentional — built to equip, elevate, and empower Africa’s next
            generation of digital trailblazers. Here's how we grow our people,
            week in and week out.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          Meet the <span className="text-[#0e4A00]">Leadership Team</span>
        </h3>
        <div className="w-24 h-1 bg-[#0e4A00] mx-auto mb-10 rounded-full"></div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* CEO */}
          <div className="text-center bg-cover">
            <img
              src={ceo}
              alt="CEO"
              className="w-50 h-50  mx-auto rounded-full object-fill shadow-md"
            />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">
              Mubarak Oladimeji Olalere
            </h4>
            <p className="text-[#0e4A00] font-medium">CEO</p>
            <p className="mt-1 text-sm text-gray-600">
              Driving the vision and mission of TechRise Africa.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-3 text-xl text-[#0e4A00]">
              <a
                href="https://www.facebook.com/profile.php?id=61550959360095"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-facebook hover:text-gray-700"></i>
              </a>
              <a
                href="https://chat.whatsapp.com/G3zKK3gJry6HJOKPQK3OPl"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-whatsapp hover:text-gray-700"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/alchemistoftech/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-linkedin hover:text-gray-700"></i>
              </a>
            </div>
          </div>

          {/* Moderator */}
          <div className="text-center">
            <img
              src={moderator}
              alt="Moderator"
              className="w-50 h-50 mx-auto rounded-full object-cover shadow-md"
            />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">
              Mutmainnah Omobolanle Ayoola
            </h4>
            <p className="text-[#0e4A00] font-medium">Community Moderator</p>
            <p className="mt-1 text-sm text-gray-600">
              Building and nurturing our tech community.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-3 text-xl text-[#0e4A00]">
              <a
                href="https://www.facebook.com/profile.php?id=61550959360095"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-facebook hover:text-gray-700"></i>
              </a>
              <a
                href="https://chat.whatsapp.com/G3zKK3gJry6HJOKPQK3OPl"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-whatsapp hover:text-gray-700"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/alchemistoftech/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-linkedin hover:text-gray-700"></i>
              </a>
            </div>
          </div>

          {/* Tech Lead */}
          <div className="text-center">
            <img
              src={techlead}
              alt="Tech Lead"
              className="w-50 h-50 mx-auto rounded-full object-cover shadow-md"
            />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">
              Ishola Fawaz Ayodeji
            </h4>
            <p className="text-[#0e4A00] font-medium">Technology Team Lead</p>
            <p className="mt-1 text-sm text-gray-600">
              Overseeing development and innovation at TechRise.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-3 text-xl text-[#0e4A00]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-facebook hover:text-gray-700"></i>
              </a>
              <a
                href="https://wa.me/2348052350516"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-whatsapp hover:text-gray-700"></i>
              </a>
              <a
                href="www.linkedin.com/in/ishola-fawaz-470419284"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-linkedin hover:text-gray-700"></i>
              </a>
              <a
                href="https://github.com/Ishola-Fawaz"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-github hover:text-gray-700"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
