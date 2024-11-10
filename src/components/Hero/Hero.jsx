import React from "react";
import yellowCar from "../../assets/HeroImg/team.png";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Empowering the Next Generation of Tech Innovators at{" "}
              <span className="text-primary">StudCatalyst</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            At StudCatalyst, we empower skilled students in data science, cybersecurity, and software development to deliver innovative solutions. Partnering with us means transforming ideas into impactful projects that drive results and elevate brands in technology.            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="btn-primary"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

