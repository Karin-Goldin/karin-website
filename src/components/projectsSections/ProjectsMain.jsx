import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Rimon fund website",
    year: "May 2024",
    align: "right",
    image: "../../public/images/Rimon.png",
    link: "https://karin-goldin.github.io/Rimon-project/",
  },
  {
    name: "Whats in the fridge? (recepies app)",
    year: "june 2025",
    align: "left",
    image: "../../public/images/Whats-in-the-fridge.png",
    link: "https://whats-in-the-fridge-eta.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-12 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
