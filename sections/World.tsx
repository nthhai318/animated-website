"use client"

import { motion } from "framer-motion";
import { staggerContainer, textContainer, textVariant2, fadeIn } from "../animation/motion";

const World = () => {
	return (
		<section className="sm:p-16 px-6 py-12 relative z-10">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="relative 2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center"
			>
				<motion.p
					variants={textContainer}
					className="font-normal text-[40px] text-secondary-white text-center"
				>
					{Array.from("| People on the World").map((char, index) => (
						<motion.span
							variants={textVariant2}
							key={index}
						>
							{char === " " ? "\u00A0" : char}
						</motion.span>
					))}
				</motion.p>
				<motion.p
					variants={textVariant2}
					initial="hidden"
					whileInView="show"
					className="mt-[8px] font-bold md:text-[56px] text-[40px] text-white text-center leading-normal"
				>
					Track friends around you and invite them to play together in the same world
				</motion.p>
				<motion.div
					variants={fadeIn("up", "tween", 0.3, 1)}
					className="relative mt-[60px] flex w-full h-[550px]"
				>
					<img src="/map.png" alt="map" className="absolute w-auto h-full object-cover" />
					<div className="absolute bottom-[20%] right-[15%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
						<img src="/people-01.png" alt="people" className="w-full h-full" />
					</div>
					<div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
						<img src="/people-03.png" alt="people" className="w-full h-full" />
					</div>
					<div className="absolute top-[10%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
						<img src="/people-02.png" alt="people" className="w-full h-full" />
					</div>
				</motion.div>

			</motion.div>
		</section>
	)
}

export default World;