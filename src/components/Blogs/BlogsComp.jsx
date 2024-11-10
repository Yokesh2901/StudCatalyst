import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/ProjectImg/img1.png";
import Img2 from "../../assets/ProjectImg/img2.png";
import Img3 from "../../assets/ProjectImg/img3.png";
import Img4 from "../../assets/ProjectImg/img4.png";
import Img5 from "../../assets/ProjectImg/img5.png";
import Img6 from "../../assets/ProjectImg/img6.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Voice Assistant",
    description:
      "“Developed an AI-powered voice assistant using Python, enabling voice command interactions for tasks such as opening applications, retrieving information, setting reminders, and controlling device functions for enhanced user convenience.",
    author: "Yokesh",
    date: "January 29, 2023",
  },
  {
    id: 2,
    image: Img2,
    title: "Web Development",
    description:
      "“We build interactive 3D websites using React for dynamic user interfaces and Node.js for backend functionality, creating immersive and responsive experiences that enhance engagement and performance across various devices.",
    author: "Yokesh",
    date: "September 12, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Face Recognition",
    description:
      "“Developed a face recognition system using Python to automate attendance tracking, identifying individuals based on facial features and recording attendance efficiently, reducing manual effort and ensuring accurate, real-time tracking. ",
    author: "Yokesh",
    date: "July 12, 2023",
  },
  {
    id: 4,
    image: Img4,
    title: "AWS Deployment",
    description:
      "“We host websites on AWS using EC2 for computing, S3 buckets for storage, and Amplify for seamless deployment. Additionally, we offer various AWS services to enhance scalability, security, and performance.",
    author: "Yokesh",
    date: "October 22, 2024",
  },
  {
    id: 5,
    image: Img5,
    title: "Enhancing Safety and Hazard Management",
    description:
      "“Collaborated with cross-functional teams to address business problems, led data collection and preprocessing, and developed AI models optimizing accuracy and cost-effectiveness, achieving a 90% detection rate for hazardous materials.",
    author: "Yokesh",
    date: "January 10, 2024",
  },
  {
    id: 6,
    image: Img6,
    title: "Optimize Machine Downtime",
    description:
      "“Collaborated with cross-functional teams to address business problems, led data collection and preprocessing, and developed AI models optimizing accuracy and cost-effectiveness, achieving a 90% detection rate for hazardous materials.",
    author: "Yokesh",
    date: "April 10, 2023",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="btn-primary">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;

