"use client"

import { motion } from "framer-motion"
import { staggerContainer, textContainer, textVariant2, fadeIn } from "../animation/motion";

const About = () => (
  <section className="sm:p-16 px-6 py-12 z-10">
    <div className="gradient-02 z-02" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center"
    >
      <motion.p
        variants={textContainer}
        className="font-normal text-[40px] text-secondary-white text-center"
      >
        {Array.from("| About Metaversus").map((char, index) => (
          <motion.span variants={textVariant2} key={index}>{char === " " ? "\u00A0" : char}</motion.span>
        ))}
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className="font-extrabold text-white"> madness of the metaverse </span>{' '}of today, using only{' '}<span className="font-extrabold text-white">VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's{' '} <span className="font-extrabold text-white">explore</span> the madness of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 1, 0.5)}
        src="/arrow-down.svg"
        alt="arrow"
        className="mt-[30px] w-[24px] h-[28px] object-contain"
      />

    </motion.div>
  </section>
)

export default About;