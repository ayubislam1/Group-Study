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

const CreateAssignmentPage = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [marks, setMarks] = useState("");
	const [image, setImage] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [dueDate, setDueDate] = useState(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			setName(user.displayName);
			setEmail(user.email);
		}
	}, [user]);
	const handleCreateAssignment = async (e) => {
		e.preventDefault();

		if (
			!title ||
			!description ||
			!marks ||
			!image ||
			!difficulty ||
			!dueDate ||
			!name ||
			!email
		) {
			alert("Please fill out all fields.");
			return;
		}
		const formattedDueDate = dueDate
			? dueDate.toISOString().split("T")[0]
			: null;
		const assignment = {
			title,
			description,
			marks,
			image,
			difficulty,
			dueDate: formattedDueDate,
			name,
			email,
		};

		try {
			const response = await axios.post(
				"https://assignment-11-backend-theta.vercel.app/assignments",
				assignment,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				setSuccessMessage("Assignment created successfully!");
				setTimeout(() => setSuccessMessage(""), 3000);

				setTitle("");
				setDescription("");
				setMarks("");
				setImage("");
				setDifficulty("");
				setDueDate(null);
				setName("");
				setEmail("");
			}
		} catch (error) {
			console.error("Error creating assignment:", error);
			alert("There was an error creating the assignment.");
		}
	};

	return (
		<div className="max-w-2xl mx-auto my-8 p-6 bg-transparent dark:bg-transparent dark:border dark:text-white rounded-lg shadow-md">
			{/* Top Banner */}
			<div className="bg-blue-500 text-white p-4 mb-6 rounded-lg shadow-md">
				<h1 className="text-3xl font-bold text-center">
					Create New Assignment
				</h1>
			</div>

			{/* Form */}
			<h1 className="text-2xl font-bold mb-6">Assignment Details</h1>

			<form onSubmit={handleCreateAssignment}>
				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">Name</label>
					<Input
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
						required
						className="bg-transparent dark:text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">Email</label>
					<Input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						required
						className="bg-transparent dark:text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">Title</label>
					<Input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter assignment title"
						required
						className="bg-transparent dark:text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">Description</label>
					<Textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Enter assignment description"
						rows={4}
						required
						className="bg-transparent dark:text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">Marks</label>
					<Input
						type="number"
						value={marks}
						onChange={(e) => setMarks(e.target.value)}
						placeholder="Enter marks"
						required
						className="bg-transparent dark:text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">Image URL</label>
					<Input
						value={image}
						onChange={(e) => setImage(e.target.value)}
						placeholder="Enter image URL"
						required
						className="bg-transparent dark:text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">
						Difficulty Level
					</label>
					<Select onValueChange={setDifficulty}>
						<SelectTrigger className="w-full bg-transparent dark:text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500">
							{difficulty ? difficulty : "Select Difficulty"}
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="easy">Easy</SelectItem>
							<SelectItem value="medium">Medium</SelectItem>
							<SelectItem value="hard">Hard</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">Due Date</label>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className="w-full text-left bg-transparent border border-gray-600 dark:text-white"
							>
								{dueDate ? format(dueDate, "yyyy-MM-dd") : "Select Due Date"}
							</Button>
						</PopoverTrigger>
						<PopoverContent align="start">
							<Calendar
								mode="single"
								selected={dueDate}
								onSelect={setDueDate}
								required
							/>
						</PopoverContent>
					</Popover>
				</div>

				{successMessage && (
					<div className="mb-4 text-green-600 font-medium">
						{successMessage}
					</div>
				)}

				<Button type="submit" className="w-full bg-primary text-white ">
					Create Assignment
				</Button>
			</form>
		</div>
	);
};

export default CreateAssignmentPage;
