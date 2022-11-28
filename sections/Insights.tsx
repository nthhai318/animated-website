"use client"

import { motion } from "framer-motion";
import { staggerContainer, textContainer, textVariant2, fadeIn } from "../animation/motion";

const insights = [
	{
		imgUrl: '/planet-06.png',
		title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
		subtitle:
			'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
	},
	{
		imgUrl: '/planet-07.png',
		title: '7 tips to easily master the madness of the Metaverse',
		subtitle:
			'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
	},
	{
		imgUrl: '/planet-08.png',
		title: 'With one platform you can explore the whole world virtually',
		subtitle:
			'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
	},
];

const InsightCard = ({ imgUrl, title, subtitle, index }: { imgUrl: string, title: string, subtitle: string, index: number }) => (
	<motion.div
		variants={fadeIn("up", "tween", index * 0.5, 1)}
		className="flex md:flex-row flex-col gap-4"
	>
		<img src={imgUrl} alt="insight" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
		<div className="flex-1 md:ml-[62px] max-w-[650px] flex flex-col w-full justify-center items-center ">
			<p className="font-semibold text-white text-[26px] lg:text-[42px]">{title}</p>
			<p className="mt-[16px] font-normal text-secondary-white text-[16px] lg:text-[20px]">{subtitle}</p>
		</div>
	</motion.div>
)

const Insights = () => {
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
					{Array.from("| Insight").map((char, index) => (
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
					className="mt-[8px] font-bold md:text-[56px] text-[40px] text-white text-center leading-normal"
				>
					Insight about metaverse
				</motion.p>
				<div className="mt-[50px] relative w-full mx-auto flex flex-col justify-center items-center gap-[30px]">
					{insights.map((insight, index) => (
						<InsightCard
							key={insight.title}
							{...insight}
							index={index + 1}
						/>
					))}
				</div>
			</motion.div>
		</section>
	)
}

export default Insights;