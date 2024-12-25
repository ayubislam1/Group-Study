import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";

const Assignments = () => {
	const [assignments, setAssignments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);
	const [selectedAssignment, setSelectedAssignment] = useState(null);
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchAssignments = async () => {
			try {
				const res = await fetch("http://localhost:7000/assignments");
				if (!res.ok) throw new Error("Failed to fetch assignments.");
				const data = await res.json();
				setAssignments(data);
                setLoading(false);
			} catch (error) {
				toast.error("Error fetching assignments.");
			} 
		};
		fetchAssignments();
	}, []);

	const handleDeleteAssignment = async (id) => {
		const assignmentToDelete = assignments.find(
			(assignment) => assignment._id === id
		);
		if (!assignmentToDelete) {
			toast.error("Assignment not found.");
			return;
		}

		if (user.email !== assignmentToDelete.email) {
			toast.error("You can only delete your own assignments.");
			setShowDeleteDialog(false);
			return;
		}

		try {
			const res = await fetch(`http://localhost:7000/assignments/${id}`, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json",
				},
			});

			toast.success("Assignment deleted successfully.");
			setAssignments((prev) =>
				prev.filter((assignment) => assignment._id !== id)
			);
		} catch (error) {
			toast.error(error.message || "Error deleting the assignment.");
		} finally {
			setShowDeleteDialog(false);
		}
	};

	const handleViewAssignment = (id) => navigate(`/assignments/${id}`);
	const handleUpdateAssignment = (id) => navigate(`/update-assignment/${id}`);
	if (loading) return <Loading></Loading>;
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-8">Assignments</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{assignments?.map((assignment) => (
					<div
						key={assignment._id}
						className="bg-white rounded-lg shadow-lg p-4"
					>
						<img
							src={assignment.image}
							alt={assignment.title}
							className="w-full h-32 object-cover mb-4 rounded"
						/>
						<h2 className="text-xl font-semibold">{assignment.title}</h2>
						<p>Marks: {assignment.marks}</p>
						<p>Difficulty: {assignment.difficulty}</p>
						<div className="flex space-x-2 mt-4">
							<Button
								onClick={() => handleViewAssignment(assignment._id)}
								variant="outline"
								className="text-blue-600 hover:bg-blue-100"
							>
								View Assignment
							</Button>
							{user?.email === assignment.email && (
								<>
									<Button
										onClick={() => handleUpdateAssignment(assignment._id)}
										variant="outline"
										className="text-yellow-600 hover:bg-yellow-100"
									>
										Update
									</Button>
									<Button
										onClick={() => {
											setSelectedAssignment(assignment._id);
											setShowDeleteDialog(true);
										}}
										variant="outline"
										className="text-red-600 hover:bg-red-100"
									>
										Delete
									</Button>
								</>
							)}
						</div>
					</div>
				))}
			</div>

			<Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Delete Assignment</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete this assignment? This action
							cannot be undone.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setShowDeleteDialog(false)}
						>
							Cancel
						</Button>
						<Button
							onClick={() => handleDeleteAssignment(selectedAssignment)}
							className="bg-red-500 text-white"
						>
							Confirm Delete
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Assignments;
