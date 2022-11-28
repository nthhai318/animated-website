"use client"

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textContainer, textVariant2 } from "../animation/motion";
import { useState } from "react";

const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
];

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }: { id: string, imgUrl: string, title: string, index: number, active: string, handleClick: Function }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full rounded-[24px] object-cover" />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">{title}</h3>
    ) : (
      <div
        className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
      >
        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[24px] mb-[16px] glassmorphism">
          <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">Enter this World</p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
      </div>

    )}
  </motion.div>
)



const Explore = () => {
  const [active, setActive] = useState<string>("world-2")

  return (
    <section className="sm:p-16 px-6 py-12" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col 2xl:max-w-[1280px] w-full">
        <motion.p
          variants={textContainer}
          className="font-normal text-[40px] text-secondary-white text-center"
        >
          {Array.from("| The World").map((char, index) => (
            <motion.span variants={textVariant2} key={index}>{char === " " ? "\u00A0" : char}</motion.span>
          ))}
        </motion.p>

        <motion.p
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="mt-[8px] font-bold md:text-[56px] text-[40px] text-white text-center leading-normal "
        >
          <>Choose the world you want to explore</>
        </motion.p>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore;