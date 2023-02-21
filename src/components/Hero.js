import React from "react";
import { heroData } from "../data";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Hero = () => {
	//destructing data
	const { pretitle, title, subtitle, btnText } = heroData;

	return (
		<section className="min-h-[980px] bg-hero bg-cover bg-right">
			{/* header */}
			<Header />
			<motion.div variants={staggerContainer(0.3,1)} initial='hidden' whileInView={'show'} viewport={{ once: true, amount: 0.6 }} className=" container mx-auto min-h-[980px] flex justify-center items-center">
				{/* text */}
				<div className=" flex flex-col items-center text-center">
					{/* pretitle */}
					<motion.div variants={fadeIn('down', 'tween', 0.2,1.1)} className=" text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1">
						{pretitle}
					</motion.div>
					{/* title */}
					<motion.h1 variants={fadeIn('down', 'tween', 0.3,1.1)} className="h1 mb-5">{title}</motion.h1>
					{/* subtitle */}
					<motion.p variants={fadeIn('down', 'tween', 0.4,1.1)} className=" text-white max-w-[540px] mb-8">{subtitle}</motion.p>
					{/* button */}
          <motion.div variants={fadeIn('down', 'tween', 0.5,1.1)}>
						<button className="btn">{btnText}</button>
          </motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
