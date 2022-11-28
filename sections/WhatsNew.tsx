"use client"

import { motion } from "framer-motion";
import { staggerContainer, planetVariants, fadeIn, textVariant2 } from "../animation/motion";

const newFeatures = [
	{
		imgUrl: '/vrpano.svg',
		title: 'A new world',
		subtitle:
			'we have the latest update with new world for you to try never mind',
	},
	{
		imgUrl: '/headset.svg',
		title: 'More realistic',
		subtitle:
			'In the latest update, your eyes are narrow, making the world more realistic than ever',
	},
];

const NewFeature = ({ imgUrl, title, subtitle }: { imgUrl: string, title: string, subtitle: string }) => (
	<div className="flex flex-1 flex-col justify-start items-start min-w-[210px] sm:max-w-[250px]">
		<div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
			<img src={imgUrl} alt={title} className="w-1/2 h-1/2 object-contain" />
		</div>
		<p className="flex-1 font-bold text-white text-[24px] mt-[26px] leading-[30px]">{title}</p>
		<p className="flex-1 font-normal text-[#b0b0b0] mt-[16px] text-[18px] leading-[32px]">{subtitle}</p>
	</div>
)

const WhatsNew = () => {
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
					variants={fadeIn("right", "tween", 0.2, 1)}
					className="flex-[0.75] flex justify-center items-center flex-col"
				>
					<motion.p
						variants={textVariant2}
						className="font-normal text-secondary-white text-center text-[40px]"
					>
						| What's New?
					</motion.p>
					<motion.p
						variants={textVariant2}
						initial="hidden"
						whileInView="show"
						className="mt-[8px] font-bold md:text-[56px] text-[30px] text-white leading-tight text-center lg:text-left"
					>
						What's new about Metaverse?
					</motion.p>
					<div className="mt-[48px] flex flex-wrap gap-[24px]">
						{newFeatures.map((feature, index) => (
							<NewFeature
								key={feature.title}
								{...feature}
							/>
						))}
					</div>
				</motion.div>
				<motion.div
					variants={planetVariants("right")}
					className="flex justify-center items-center flex-1"
				>
					<img src="/whats-new.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
				</motion.div>
			</motion.div>
		</section>
	)
}

export default WhatsNew;