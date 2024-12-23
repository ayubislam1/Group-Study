import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateAssignment = () => {
	const { id } = useParams();
	console.log("ID from URL:", id); // Debugging log
	const [assignment, setAssignment] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (!id) {
			console.error("No ID provided in URL"); // Debugging error
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

	if (!assignment) return <p>Loading...</p>;

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">Update Assignment</h1>
			<div className="bg-white p-6 rounded-lg shadow-md">
				<Input
					value={assignment.title}
					onChange={(e) =>
						setAssignment({ ...assignment, title: e.target.value })
					}
					className="mb-4"
				/>
				<Input
					value={assignment.marks}
					onChange={(e) =>
						setAssignment({ ...assignment, marks: e.target.value })
					}
					type="number"
					className="mb-4"
				/>
				<Input
					value={assignment.difficulty}
					onChange={(e) =>
						setAssignment({ ...assignment, difficulty: e.target.value })
					}
					className="mb-4"
				/>
				<Textarea
					value={assignment.image}
					onChange={(e) =>
						setAssignment({ ...assignment, image: e.target.value })
					}
					className="mb-4"
				/>
				<Button onClick={handleUpdate} className="bg-blue-600 text-white">
					Update Assignment
				</Button>
			</div>
		</div>
	);
};

export default UpdateAssignment;
