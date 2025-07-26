import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "NOC Engineer",
    company: "Cybereason",
    date: "2021-2023",
    responsibilities: [
      "Monitored and managed network operations",
      "Troubleshot and resolved network issues",
      "Collaborated with cross-functional teams",
      "Maintained network security protocols",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Cybereason",
    date: "2023-present",
    responsibilities: [
      "Implementing reusable components.",
      "Developed user-friendly web interfaces.",
      "Collaborated with designers to implement UI/UX best practices.",
      "Optimized applications for maximum speed and scalability.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((exp, index) => {
        return (
          <>
            <SingleExperience key={index} experience={exp} />;
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
