"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typewriter } from "react-simple-typewriter";

export function Banner() {
	const images = [
		"https://i.ibb.co.com/B2Z155x9/rodeo-project-management-software-MEMLy-O2ot-EI-unsplash.jpg",
		"https://i.ibb.co.com/RqxfbPt/brooke-cagle-u-HVRv-Dr7pg-unsplash.jpg",
		"https://i.ibb.co.com/DDgRTsKn/mimi-thian-vd-XMSi-X-n6-M-unsplash.jpg",
	];

	return (
		<div className="relative w-full h-[25rem] sm:h-[40rem]">
			<Carousel
				showArrows={false}
				autoPlay={true}
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				className="h-full"
			>
				{images.map((img, index) => (
					<div key={index}>
						<img
							src={img}
							className="w-full h-[30rem] sm:h-[40rem] object-cover"
							alt={`Slide ${index + 1}`}
						/>
					</div>
				))}
			</Carousel>

			{/* Text Overlay */}
			<div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 ">
				<motion.p
					initial={{ opacity: 0, y: -80, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl bg-clip-text text-white py-4"
				>
					<Typewriter
						words={[
							"Collaborate and Learn Together in Real-Time.",
							"Track Your Progress and Stay on Top of Assignments.",
							"Join the Future of Online Education and Group Study.",
						]}
						loop={0}
						cursor
						cursorStyle="_"
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={2000}
					/>
				</motion.p>
			</div>
		</div>
	);
}
