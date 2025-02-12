import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "../components/ui/accordion"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CardHoverEffectDemo } from "../components/ui/CardHoverEffectDemo";
import { Banner } from "../components/ui/Banner";
import AboutUs from "../components/ui/AboutUs";
import Lottie from "lottie-react";
import { ImageMinus } from "lucide-react";
import faqAnimation from "../assets/faq.json";
import ExamHelpSection from "./ExamHelpSection";
import CoursesSection from "./CoursesSection";

function Home() {
	return (
		<div>
			<Banner></Banner>
			<AboutUs></AboutUs>
			<CardHoverEffectDemo></CardHoverEffectDemo>
			<ExamHelpSection></ExamHelpSection>
			<CoursesSection></CoursesSection>
			{/* FAQ Section with Accordion */}
			<section id="faq" className="pb-24 bg-gray-50 dark:bg-transparent">
				<div className="container mx-auto text-center px-6">
					<h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 pt-5">
						Frequently Asked Questions
					</h2>
					<div className="flex flex-col md:flex-row items-center gap-12">
						{/* Animation */}
						<div className="w-full md:w-1/3 ">
							<Lottie animationData={faqAnimation} />
						</div>

						{/* FAQ Section */}
						<div className="w-full md:w-2/3">
							<Accordion type="single" collapsible>
								{[
									{
										question: "How do I create an assignment?",
										answer:
											"To create an assignment, go to the 'Create Assignment' page, fill out the form, and submit it for review.",
									},
									{
										question: "Can I submit assignments from other users?",
										answer:
											"Yes, you can view assignments submitted by others and submit feedback on pending assignments.",
									},
									{
										question: "How do I toggle between light and dark mode?",
										answer:
											"Toggle between light and dark mode by clicking the mode switcher button in the navigation bar.",
									},
									{
										question: "How do I update my profile?",
										answer:
											"You can update your profile by navigating to 'My Profile' to edit your details and upload a new profile picture.",
									},
								].map((item, index) => (
									<AccordionItem key={index} value={`item-${index}`}>
										<AccordionTrigger className="w-full text-left text-lg font-semibold py-4 px-6 border-b border-gray-300 dark:border-gray-700 transition-all hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">
											{item.question}
										</AccordionTrigger>
										<AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
											{item.answer}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
