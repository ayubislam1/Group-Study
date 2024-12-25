import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../components/ui/Loading";
import { WarningProvider } from "@radix-ui/react-dialog";

const UpdateAssignment = () => {
	const { id } = useParams();
	console.log("ID from URL:", id);
	const [assignment, setAssignment] = useState(null);
	const [errorSms, setError] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (!id) {
			console.error("No ID provided in URL");
			return;
		}

		// Fetch the assignment data
		fetch(`http://localhost:7000/assignments/${id}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`Error fetching assignment with ID: ${id}`);
				}
				return res.json();
			})
			.then((data) => setAssignment(data))
			.catch((error) => console.error(error.message));
	}, [id]);

	const handleUpdate = async () => {
		if (
			!assignment.title ||
			!assignment.marks ||
			!assignment.difficulty ||
			!assignment.image
		) {
			setError("Please fill out all fields.");
			return;
		}
        setError("")
		// Marks validation (must be a number and greater than 0)
		if (isNaN(assignment.marks) || assignment.marks <= 0) {
			alert("Please enter a valid number for marks.");
			return;
		}

		// URL validation for image
		const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
		if (!urlRegex.test(assignment.image)) {
			alert("Please enter a valid image URL.");
			return;
		}

		const updatedData = {
			title: assignment.title.trim(),
			marks: Number(assignment.marks),
			difficulty: assignment.difficulty.trim(),
			image: assignment.image.trim(),
		};

		console.log("Payload:", updatedData);

		try {
			const response = await axios.put(
				`http://localhost:7000/assignments/${id}`,
				updatedData,
				{
					headers: { "Content-Type": "application/json" },
				}
			);

			if (response.status === 200) {
				toast.success("Assignment updated successfully!");
				navigate("/assignments");
			}
		} catch (error) {
			console.error(
				"Error updating assignment:",
				error.response?.data || error.message
			);
			alert(error.response?.data?.error || "Error updating assignment.");
		}
	};

	if (!assignment) return <Loading />;
    

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">Update Assignment</h1>
			<div className="bg-white p-6 rounded-lg shadow-md">
				<div className="mb-4">
					<label
						htmlFor="title"
						className="block text-lg font-medium text-gray-700"
					>
						Title
					</label>
					<Input
						id="title"
						value={assignment.title}
						onChange={(e) =>
							setAssignment({ ...assignment, title: e.target.value })
						}
						className="mt-1"
					/>
					<p className="text-red-500">{errorSms}</p>
				</div>

				<div className="mb-4">
					<label
						htmlFor="marks"
						className="block text-lg font-medium text-gray-700"
					>
						Marks
					</label>
                    
					<Input
						id="marks"
						value={assignment.marks}
						onChange={(e) =>
							setAssignment({ ...assignment, marks: e.target.value })
						}
						type="number"
						className="mt-1"
					/>
                    
				</div>

				<div className="mb-4">
					<label
						htmlFor="difficulty"
						className="block text-lg font-medium text-gray-700"
					>
						Difficulty
					</label>
					<Input
						id="difficulty"
						value={assignment.difficulty}
						onChange={(e) =>
							setAssignment({ ...assignment, difficulty: e.target.value })
						}
						className="mt-1"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="image"
						className="block text-lg font-medium text-gray-700"
					>
						Image URL
					</label>
					<Textarea
						id="image"
						value={assignment.image}
						onChange={(e) =>
							setAssignment({ ...assignment, image: e.target.value })
						}
						className="mt-1"
					/>
				</div>

				<Button onClick={handleUpdate} className="bg-blue-600 text-white">
					Update Assignment
				</Button>
			</div>
		</div>
	);
};

export default UpdateAssignment;
