/* eslint-disable react-refresh/only-export-components */

import { HoverEffect } from "./HoverEffect";

export function CardHoverEffectDemo() {
	return (
		<section className="py-16">
			<div className="max-w-5xl mx-auto px-8 text-center">
				<h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
					Explore Our Latest Crowdfunding Campaigns
				</h2>
				<p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
					Discover innovative ideas and contribute to campaigns that inspire
					change. Join us in supporting visionary projects that matter.
				</p>
				<HoverEffect items={campaigns} />
			</div>
		</section>
	);
}

export const campaigns = [
	{
		title: "Assignment Creation",
		description:
			"Create assignments easily with detailed descriptions, due dates, and grading criteria for students.",
		link: "https://example.com/feature1",
		image: "https://example.com/assignment-creation-image.jpg",
	},
	{
		title: "Real-Time Collaboration",
		description:
			"Collaborate with classmates in real-time on group assignments and projects using integrated tools.",
		link: "https://example.com/feature2",
		image: "https://example.com/real-time-collaboration-image.jpg",
	},
	{
		title: "Automated Grading",
		description:
			"Automatically grade assignments based on predefined criteria, saving time and effort for instructors.",
		link: "https://example.com/feature3",
		image: "https://example.com/automated-grading-image.jpg",
	},
	{
		title: "Student Dashboard",
		description:
			"A personalized dashboard for students to track assignments, grades, deadlines, and upcoming tasks.",
		link: "https://example.com/feature4",
		image: "https://example.com/student-dashboard-image.jpg",
	},
	{
		title: "Feedback and Reviews",
		description:
			"Provide feedback on assignments and review the work of your peers with detailed comments and suggestions.",
		link: "https://example.com/feature5",
		image: "https://example.com/feedback-reviews-image.jpg",
	},
	{
		title: "Mobile Access",
		description:
			"Access assignments, grades, and collaboration tools on-the-go with our fully responsive mobile platform.",
		link: "https://example.com/feature6",
		image: "https://example.com/mobile-access-image.jpg",
	},
];
