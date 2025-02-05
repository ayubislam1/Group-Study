import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "../components/ui/accordion"; // ShadCN Accordion components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CardHoverEffectDemo } from "../components/ui/CardHoverEffectDemo";
import { Banner } from "../components/ui/Banner";
import AboutUs from "../components/ui/AboutUs";
import Lottie from "lottie-react";
import { ImageMinus } from "lucide-react";
import faqAnimation from "../assets/faq.json"

function Home() {
	return (
		<div>
			<Banner></Banner>
			<AboutUs></AboutUs>
			<CardHoverEffectDemo></CardHoverEffectDemo>
		

			{/* FAQ Section with Accordion */}
			<section id="faq" className="pb-24  bg-gray-50 dark:bg-transparent ">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-semibold text-gray-800  dark:text-white mb-12 pt-5">
						Frequently Asked Questions
					</h2>
				<div className="flex flex-col md:flex-row justify-center items-center ">
				<div className="w-full md:w-1/3 "><Lottie animationData={faqAnimation}></Lottie></div>
					<div className="max-w-2xl mx-auto">
						<Accordion type="single" collapsible>
							{/* Question 1 */}
							<AccordionItem value="item-1">
								<AccordionTrigger className="w-full text-left dark:text-white text-xl font-semibold text-gray-800 py-4 px-6 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 transition-all">
									How do I create an assignment?
								</AccordionTrigger>
								<AccordionContent className="px-6 py-4 dark:text-white text-gray-600">
									To create an assignment, go to the "Create Assignment" page,
									fill out the form with the required details, and submit it for
									review.
								</AccordionContent>
							</AccordionItem>

							{/* Question 2 */}
							<AccordionItem value="item-2">
								<AccordionTrigger className="w-full text-left text-xl font-semibold dark:text-white text-gray-800 py-4 px-6 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 transition-all">
									Can I submit assignments from other users?
								</AccordionTrigger>
								<AccordionContent className="px-6 py-4 dark:text-white text-gray-600">
									Yes, you can view assignments submitted by others and submit
									feedback on pending assignments.
								</AccordionContent>
							</AccordionItem>

							{/* Question 3 */}
							<AccordionItem value="item-3">
								<AccordionTrigger className="w-full dark:text-white text-left text-xl font-semibold text-gray-800 py-4 px-6 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 transition-all">
									How do I toggle between light and dark mode?
								</AccordionTrigger>
								<AccordionContent className="px-6 py-4 dark:text-white text-gray-600">
									Toggle between light and dark mode easily by clicking the mode
									switcher button in the navigation bar.
								</AccordionContent>
							</AccordionItem>

							{/* Question 4 */}
							<AccordionItem value="item-4">
								<AccordionTrigger className="w-full dark:text-white text-left text-xl font-semibold text-gray-800 py-4 px-6 border-b border-gray-200 hover:bg-gray-100  dark:hover:bg-gray-500 transition-all">
									How do I update my profile?
								</AccordionTrigger>
								<AccordionContent className="px-6 py-4 dark:text-white text-gray-600">
									You can update your profile by navigating to the "My Profile"
									section, where you can edit your details and upload a new
									profile picture.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
