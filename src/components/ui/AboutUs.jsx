import React from "react";

export default function AboutUs() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<main className="flex-1">
				<section className="w-full py-12 ">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
							<div className="space-y-4">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									About Group Study
								</div>
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
									Empowering Students with Collaborative Learning Solutions
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our platform facilitates online group studies, allowing users
									to create and share assignments, collaborate on projects, and
									grade each other's work, fostering a supportive learning
									environment where all students can thrive together.
								</p>
							</div>
							<img
								src="https://www.eschoolnews.com/files/2023/12/collaborative-learning.jpeg"
								width="550"
								height="310"
								alt="About Us"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last md:mt-14"
							/>
						</div>
					</div>
				</section>

				<section className="w-full py-12 ">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									Our Mission
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Transforming Learning Through Collaboration
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our mission is to empower students with the tools and
									community to succeed academically through interactive group
									study environments.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Our Values</h3>
									<p className="text-muted-foreground">
										The core values that guide our platform and community:
									</p>
								</div>
								<ul className="grid gap-2">
									<li className="flex items-center gap-2">
										<CheckIcon className="w-4 h-4 text-primary" />
										<span>
											Collaboration: We encourage teamwork to enhance learning
											outcomes and build mutual support among students.
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon className="w-4 h-4 text-primary" />
										<span>
											Integrity: We uphold ethical practices in grading and
											assignment evaluations.
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon className="w-4 h-4 text-primary" />
										<span>
											Innovation: We continually improve our platform with
											features that meet students' evolving needs.
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon className="w-4 h-4 text-primary" />
										<span>
											Inclusively: All students are welcome, and we strive to
											create an accessible learning environment.
										</span>
									</li>
								</ul>
							</div>
							<img
								src="https://epaouydin3q.exactdn.com/wp-content/uploads/2024/02/Collaborative-Learning-AI.jpg?strip=all&lossy=1&ssl=1"
								width="550"
								height="310"
								alt="Our Values"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
							/>
						</div>
					</div>
				</section>

				<section className="w-full py-12  bg-muted">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									Achievements
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Our Key Milestones
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									We have achieved remarkable milestones in promoting
									collaborative learning through technology.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
							<div className="flex flex-col items-center justify-center space-y-2">
								<div className="bg-primary rounded-md p-3 flex items-center justify-center">
									<AwardIcon className="w-6 h-6 text-primary-foreground" />
								</div>
								<div className="text-center">
									<h3 className="text-lg font-bold">Student Success Stories</h3>
									<p className="text-muted-foreground">
										Numerous students have improved their grades through our
										collaborative platform.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-2">
								<div className="bg-primary rounded-md p-3 flex items-center justify-center">
									<ScalingIcon className="w-6 h-6 text-primary-foreground" />
								</div>
								<div className="text-center">
									<h3 className="text-lg font-bold">Growing Community</h3>
									<p className="text-muted-foreground">
										Our user base has rapidly increased, fostering a lively
										study community.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-2">
								<div className="bg-primary rounded-md p-3 flex items-center justify-center">
									<UsersIcon className="w-6 h-6 text-primary-foreground" />
								</div>
								<div className="text-center">
									<h3 className="text-lg font-bold">Connecting Users</h3>
									<p className="text-muted-foreground">
										Students are connecting with peers to collaborate on their
										studies and assignments.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

function AwardIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
			<circle cx="12" cy="8" r="6" />
		</svg>
	);
}

function CheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}

function ScalingIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
			<path d="M14 15H9v-5" />
			<path d="M16 3h5v5" />
			<path d="M21 3 9 15" />
		</svg>
	);
}

function UsersIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}
