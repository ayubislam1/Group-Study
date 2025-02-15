import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button } from "../components/ui/button";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";
import { toast, ToastContainer } from "react-toastify";

const AssignmentDetail = () => {
	const [assignment, setAssignment] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [googleDocsLink, setGoogleDocsLink] = useState("");
	const [note, setNote] = useState("");
	const { id } = useParams();
	const { user } = useAuth();

	useEffect(() => {
		axios
			.get(`https://assignment-11-backend-theta.vercel.app/assignments/${id}`)
			.then((response) => {
				setAssignment(response.data);
			})
			.catch((err) =>
				console.error("Error fetching assignment details: ", err)
			);
	}, [id]);

	const { marks, description, image, title, name, dueDate } = assignment;

	const handleSubmit = async () => {
		if (!googleDocsLink.trim()) {
			alert("Google Docs link is required.");
			return;
		}

		try {
			await axios.post(
				`https://assignment-11-backend-theta.vercel.app/submit-assignment`,
				{
					assignmentId: id,
					googleDocsLink,
					note,
					email: user.email,
					status: "pending",
					marks,
					description,
					image,
					title,
					name,
					dueDate,
				}
			);
			toast.success("Assignment submitted successfully!");
			setModalOpen(false);
			setGoogleDocsLink("");
			setNote("");
		} catch (error) {
			alert("After log in you can submit");
		}
	};

	if (!assignment) return <Loading></Loading>;

	return (
		<div className="container mx-auto p-5">
			<h1 className="text-2xl font-bold mb-5">{assignment.title}</h1>
			<p>{assignment.description}</p>
			<p>Marks: {assignment.marks}</p>
			<p>Difficulty: {assignment.difficulty}</p>
			<img
				src={assignment.image}
				alt={assignment.title}
				className="w-full h-60 object-fit rounded-md mt-5"
			/>

			<Button onClick={() => setModalOpen(true)} className="mt-5">
				Take Assignment
			</Button>

			{modalOpen && (
				<div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white p-5 rounded-md shadow-lg w-96">
						<h2 className="text-xl mb-3 dark:text-black">
							Submit Your Assignment
						</h2>
						<input
							type="text"
							placeholder="Google Docs Link"
							value={googleDocsLink}
							onChange={(e) => setGoogleDocsLink(e.target.value)}
							className="w-full p-2 border rounded-md mb-3 dark:text-black"
						/>
						<textarea
							placeholder="Quick Note"
							value={note}
							onChange={(e) => setNote(e.target.value)}
							className="w-full p-2 border rounded-md mb-3 dark:text-black"
						/>
						<div className="flex justify-end gap-3">
							<Button onClick={() => setModalOpen(false)} variant="outline">
								Cancel
							</Button>
							<Button onClick={handleSubmit} className="bg-blue-600 text-white">
								Submit
							</Button>
						</div>
					</div>
				</div>
			)}
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default AssignmentDetail;
