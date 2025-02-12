import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router";
import { Button } from "../components/ui/button";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";
import { toast, ToastContainer } from "react-toastify";

const GiveMark = () => {
	const [assignment, setAssignment] = useState(null);
	const [ObtainMarks, setMarks] = useState("");
	const [feedback, setFeedback] = useState("");
	const { id } = useParams();
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!id) {
			console.error("No ID provided in URL");
			return;
		}

		fetch(
			`https://assignment-11-backend-theta.vercel.app/submit-assignment/${id}`
		)
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
			if (!ObtainMarks || !feedback) {
				alert("Please provide marks and feedback.");
				return;
			}

			await axios.put(
				`https://assignment-11-backend-theta.vercel.app/submit-assignment/${id}`,
				{
					assignmentId: id,
					ObtainMarks,
					feedback,
					email: user.email,
				}
			);

			toast.success("Assignment marked successfully!");
			navigate("/pending_assignments");
		} catch (error) {
			alert("Error marking the assignment.");
		}
	};
	if (assignment?.email === user.email) {
		return (
			<div className="min-h-screen flex justify-center items-center">
				You cannot mark your own assignment.
			</div>
		);
	}
	if (!assignment) return <Loading></Loading>;

	return (
		<div className="container mx-auto p-5">
			<h1 className="text-2xl font-bold mb-5">Mark Assignment</h1>
			<div className="flex justify-between md:items-center gap-1 md:gap-0">
				<div>
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
				</div>
				<div>
					<p>
						<strong>TotalMark:</strong> {assignment.marks}
					</p>
					<p>
						<strong>Due Date:</strong> {assignment.dueDate}
					</p>
				</div>
			</div>

			<div className="mt-5">
				<label className="block mb-2">
					<strong>Marks:</strong>
				</label>
				<input
					type="number"
					value={ObtainMarks}
					onChange={(e) => setMarks(e.target.value)}
					className="w-full p-2 border rounded  dark:text-black"
				/>
			</div>
			<div className="mt-5">
				<label className="block mb-2">
					<strong>Feedback:</strong>
				</label>
				<textarea
					value={feedback}
					onChange={(e) => setFeedback(e.target.value)}
					className="w-full p-2 border rounded dark:text-black"
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
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default GiveMark;
