"use client"

import { motion } from "framer-motion";
import { staggerContainer, planetVariants, fadeIn, textContainer, textVariant2 } from "../animation/motion";

const startingFeatures = [
	'Find a world that suits you and you want to enter',
	'Enter the world by reading basmalah to be safe',
	'No need to beat around the bush, just stay on the gas and have fun',
];

const StartSteps = ({ text, number }: { text: string, number: number }) => (
	<div className="flex flex-row justify-center items-center">
		<div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
			<p className="font-bold text-[20px] text-white">0{number}</p>
		</div>
		<p className="flex-1 ml-[30px] font-normal text-secondary-white">{text}</p>
	</div>
)

const GetStarted = () => {
	return (
		<section className="sm:p-16 px-6 py-12 relative">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
			>
				<motion.div
					variants={planetVariants("left")}
					className="flex justify-center items-center flex-1"
				>
					<img src="/get-started.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
				</motion.div>
				<motion.div
					variants={fadeIn("left", "tween", 0.2, 1)}
					className="flex-[0.75] flex justify-center items-center flex-col"
				>
					<motion.p
						variants={textVariant2}
						className="font-normal text-secondary-white text-center text-[40px]"
					>
						| How Metaverse Works
					</motion.p>
					<motion.p
						variants={textVariant2}
						initial="hidden"
						whileInView="show"
						className="mt-[8px] font-bold md:text-[56px] text-[30px] text-white leading-tight text-center"
					>
						Get started with just a few clicks
					</motion.p>
					<div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
						{startingFeatures.map((feature, index) => (
							<StartSteps
								key={feature}
								number={index + 1}
								text={feature}
							/>
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default GetStarted;