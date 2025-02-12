import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ExamHelpSection() {
	const features = [
		"Become Pro At Time Management.",
		"Ut Consequat Eisdrend Ante. Sed Consequat. Diam Eget.",
		"Preesent Viverra Commodo Sapien Faucibus Vehicula.",
		"Donec Motlis: Triscalunt Nisi Non Solicitudin",
	];

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden"
		>
			<motion.div
				className="absolute right-20 top-1/2 w-24 h-24 bg-primary-100 rounded-full blur-xl opacity-30"
				animate={{ y: [-20, 0, -20] }}
				transition={{ duration: 4, repeat: Infinity }}
			/>
			<motion.div
				className="absolute left-20 bottom-1/3 w-16 h-16 bg-primary-200 rounded-full blur-xl opacity-30"
				animate={{ y: [0, -20, 0] }}
				transition={{ duration: 5, repeat: Infinity, delay: 1 }}
			/>

			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-5xl font-bold  text-gray-900 dark:text-white">
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ staggerChildren: 0.1 }}
								className="inline-block"
							>
								{["Exam Help"].map((char, index) => (
									<motion.span
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
										className="inline-block"
									>
										{char}
									</motion.span>
								))}
							</motion.span>
						</h2>
					</motion.div>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<img
							src="https://i.ibb.co.com/sprCkBpH/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg"
							alt="Tutoring session"
							className="rounded-2xl  transform hover:scale-[1.01] transition-transform duration-300"
						/>
					</motion.div>

					<motion.div
						className="space-y-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.2 + 0.3 }}
								className="group flex items-start gap-4 p-6 bg-white/90  rounded-xl shadow-md hover:shadow-xl transition-all hover:bg-white"
								whileHover={{ scale: 1.02 }}
							>
								<div className="flex-shrink-0">
									<span className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700 text-blue-300 rounded-lg font-medium transform group-hover:scale-110 transition-transform">
										{index + 1}
									</span>
								</div>
								<p className="text-gray-700 text-lg leading-relaxed">
									{feature}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>

				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
				></motion.div>
			</div>
		</motion.section>
	);
}
