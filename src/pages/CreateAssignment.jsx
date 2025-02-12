import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAssignmentPage = () => {
	const { user } = useAuth();

	// Form state
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		marks: "",
		image: "",
		difficulty: "easy", // Default difficulty
		dueDate: null,
		name: "",
		email: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	// Set name and email from authenticated user
	useEffect(() => {
		if (user) {
			setFormData((prevData) => ({
				...prevData,
				name: user.displayName || "",
				email: user.email || "",
			}));
		}
	}, [user]);

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	// Validate form fields
	const validateForm = () => {
		const requiredFields = [
			"title",
			"description",
			"marks",
			"image",
			"dueDate",
		];
		for (const field of requiredFields) {
			if (!formData[field]) {
				toast.error(`Please fill out the ${field} field.`);
				return false;
			}
		}
		return true;
	};

	// Handle form submission
	const handleCreateAssignment = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (!validateForm()) {
			setIsSubmitting(false);
			return;
		}

		const formattedDueDate = formData.dueDate
			? format(formData.dueDate, "yyyy-MM-dd")
			: null;

		try {
			const response = await axios.post(
				"https://assignment-11-backend-theta.vercel.app/assignments",
				{ ...formData, dueDate: formattedDueDate },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				toast.success("Assignment created successfully!");

				// Reset form
				setFormData({
					title: "",
					description: "",
					marks: "",
					image: "",
					difficulty: "easy",
					dueDate: null,
					name: user?.displayName || "",
					email: user?.email || "",
				});
			}
		} catch (error) {
			console.error("Error creating assignment:", error);
			toast.error("There was an error creating the assignment.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Create New Assignment
					</h1>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
						Fill out the form below to create a new assignment.
					</p>
				</div>

				{/* Form */}
				<form
					onSubmit={handleCreateAssignment}
					className="bg-white dark:bg-gray-800 shadow rounded-lg p-6"
				>
					<div className="grid grid-cols-1 gap-6">
						{/* Name */}
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Name
							</label>
							<Input
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Enter your name"
								required
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						{/* Email */}
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Email
							</label>
							<Input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Enter your email"
								required
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						{/* Title */}
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Title
							</label>
							<Input
								name="title"
								value={formData.title}
								onChange={handleChange}
								placeholder="Enter assignment title"
								required
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						{/* Description */}
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Description
							</label>
							<Textarea
								name="description"
								value={formData.description}
								onChange={handleChange}
								placeholder="Enter assignment description"
								rows={4}
								required
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						{/* Marks */}
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Marks
							</label>
							<Input
								type="number"
								name="marks"
								value={formData.marks}
								onChange={handleChange}
								placeholder="Enter marks"
								required
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						{/* Image URL */}
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Image URL
							</label>
							<Input
								name="image"
								value={formData.image}
								onChange={handleChange}
								placeholder="Enter image URL"
								required
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						{/* Difficulty Level */}
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Difficulty Level
							</label>
							<Select
								value={formData.difficulty}
								onValueChange={(value) =>
									setFormData((prev) => ({ ...prev, difficulty: value }))
								}
							>
								<SelectTrigger className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
									{formData.difficulty}
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="easy">Easy</SelectItem>
									<SelectItem value="medium">Medium</SelectItem>
									<SelectItem value="hard">Hard</SelectItem>
								</SelectContent>
							</Select>
						</div>

						{/* Due Date */}
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Due Date
							</label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										className="w-full text-left rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
									>
										{formData.dueDate
											? format(formData.dueDate, "yyyy-MM-dd")
											: "Select Due Date"}
									</Button>
								</PopoverTrigger>
								<PopoverContent align="start" className="z-30 relative">
									<Calendar
										mode="single"
										selected={formData.dueDate}
										onSelect={(date) =>
											setFormData((prev) => ({ ...prev, dueDate: date }))
										}
										required
									/>
								</PopoverContent>
							</Popover>
						</div>

						{/* Submit Button */}
						<div>
							<Button
								type="submit"
								className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-md"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Creating..." : "Create Assignment"}
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateAssignmentPage;
