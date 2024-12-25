import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router";
import { Button } from "../components/ui/button";
import useAuth from "../hooks/useAuth";

const GiveMark = () => {
	const [assignment, setAssignment] = useState(null);
	const [marks, setMarks] = useState("");
	const [feedback, setFeedback] = useState("");
	const { id } = useParams();
	console.log(id);
	const { user } = useAuth();
	const navigate = useNavigate();
	console.log("link", assignment?.googleDocsLink);
	useEffect(() => {
		if (!id) {
			console.error("No ID provided in URL");
			return;
		}

		fetch(`http://localhost:7000/submit-assignment/${id}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`Error fetching assignment with ID: ${id}`);
				}
				return res.json();
			})
			.then((data) => setAssignment(data))
			.catch((error) => console.error(error.message));
	}, [id]);

	const handleSubmit = async () => {
		try {
			if (!marks || !feedback) {
				alert("Please provide marks and feedback.");
				return;
			}

			await axios.post(`http://localhost:7000/mark-assignment`, {
				assignmentId: id,
				marks,
				feedback,
				email: user.email,
			});

			alert("Assignment marked successfully!");
			navigate("/pending-assignments");
		} catch (error) {
			alert("Error marking the assignment.");
		}
	};

	if (!assignment) return <div>Loading...</div>;

	// if (assignment.email === user.email) {
	// 	return <div className="min-h-screen flex justify-center items-center">You cannot mark your own assignment.</div>;
	// }

	return (
		<div className="container mx-auto p-5">
			<h1 className="text-2xl font-bold mb-5">Mark Assignment</h1>
			<p>
				<strong>Title:</strong> {assignment.title}
			</p>
			<p>
				<strong>Google Docs Link:</strong>{" "}
				<Link
					to={assignment.googleDocsLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					Open Document
				</Link>
			</p>
			<p>
				<strong>Note:</strong> {assignment.note}
			</p>
			<div className="mt-5">
				<label className="block mb-2">
					<strong>Marks:</strong>
				</label>
				<input
					type="number"
					value={marks}
					onChange={(e) => setMarks(e.target.value)}
					className="w-full p-2 border rounded"
				/>
			</div>
			<div className="mt-5">
				<label className="block mb-2">
					<strong>Feedback:</strong>
				</label>
				<textarea
					value={feedback}
					onChange={(e) => setFeedback(e.target.value)}
					className="w-full p-2 border rounded"
				></textarea>
			</div>
			<div className="mt-5 flex justify-end">
				<Button
					onClick={handleSubmit}
					className="bg-green-500 text-white px-4 py-2 rounded"
				>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default GiveMark;
