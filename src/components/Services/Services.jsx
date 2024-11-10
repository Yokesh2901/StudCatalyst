import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaBrain } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiCyberdefenders } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const skillsData = [
  {
    name: "Data Analytics",
    icon: <DiGoogleAnalytics className="text-4xl text-primary" />,
    link: "#",
    description:
      "Data analytics transforms raw data into actionable insights, helping businesses make informed decisions, optimize operations, and drive growth effectively.",
    aosDelay: "0",
  },
  {
    name: "Data Science",
    icon: <GiMaterialsScience className="text-4xl text-primary" />,
    link: "#",
    description:
      "Data Science involves analyzing complex data to extract insights, build models, and drive decisions using statistical, machine learning, and programming techniques.",
    aosDelay: "300",
  },
  {
    name: "Web Designing",
    icon: <CgWebsite className="text-4xl text-primary" />,
    link: "#",
    description:
      "Web development is the process of creating, designing, and maintaining websites using coding languages, frameworks, and tools for functionality.",
    aosDelay: "500",
  },
  {
    name: "Artificial Intelligence",
    icon: <FaBrain className="text-4xl text-primary" />,
    link: "#",
    description:
      "Artificial Intelligence involves creating systems that simulate human intelligence, enabling machines to perform tasks like learning, reasoning, and problem-solving.",
    aosDelay: "700",
  },
  {
    name: "Cyber Security",
    icon: <SiCyberdefenders className="text-4xl text-primary" />,
    link: "#",
    description:
      "Cybersecurity involves protecting systems, networks, and data from digital attacks, ensuring confidentiality, integrity, and availability of information.",
    aosDelay: "700",
  },
  {
    name: "AWS",
    icon: <FaAws className="text-4xl text-primary" />,
    link: "#",
    description:
      "AWS (Amazon Web Services) provides scalable cloud computing solutions, offering services for computing, storage, databases, machine learning, and more.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              StudCatalyst enables students to create data-driven solutions, offering hands-on learning and freelance opportunities.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

