import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import fatihPhoto from "../assets/profile.jpg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* TEXT + FOTO */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* KIRI - Text */}
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className="text-white text-[45px] font-bold">Umi Fatihaturrohmah</h2>

          </motion.div>

          {/* Nama
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-2 text-white font-semibold text-[20px]"
          >
            Umi Fatihaturrohmah
          </motion.p> */}

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a skilled UI/UX-focused Web and Mobile Developer with experience
            in both front-end and back-end technologies. My core expertise lies
            in JavaScript and frameworks such as React, Node.js, Three.js, and
            Flutter. I also have a strong foundation in Python, C, Java, PHP,
            and Dart, with additional knowledge in artificial intelligence.
            <br /><br />
            I'm proficient in a wide range of tools including HTML, CSS, Flask,
            Figma, Canva, and Visual Studio Code. I enjoy crafting responsive
            interfaces and intuitive user experiences. As a fast learner and
            team collaborator, I’m passionate about transforming ideas into
            efficient, scalable, and real-world digital solutions. Let's work
            together to bring your vision to life!
          </motion.p>
        </div>

        {/* KANAN - Foto */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-full md:w-[240px] md:ml-4 mt-5 md:mt-0"
        >
          <Tilt
            options={{
              max: 25,
              scale: 1.05,
              speed: 450,
            }}
            className="w-full"
          >
            <img
              src={fatihPhoto}
              alt="Fatih"
              className="rounded-2xl w-full object-cover shadow-lg"
              style={{
                aspectRatio: "3/4",
                objectPosition: "top",
              }}
            />
          </Tilt>
        </motion.div>
      </div>

      {/* SERVICE CARDS */}
      {/* SERVICE CARDS Responsive */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>

    </>
  );
};

export default SectionWrapper(About, "about");
