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
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Assignments = () => {
	const [assignments, setAssignments] = useState([]);
	const [filteredAssignments, setFilteredAssignments] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterDifficulty, setFilterDifficulty] = useState("");
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
				setFilteredAssignments(data); 
			} catch (error) {
				toast.error("Error fetching assignments.");
			}
		};
		fetchAssignments();
	}, []);

	
	useEffect(() => {
		let filtered = assignments;

		
		if (searchTerm) {
			filtered = filtered.filter((assignment) =>
				assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		
		if (filterDifficulty) {
            filtered = filtered.filter(
                (assignment) => assignment.difficulty.toLowerCase() === filterDifficulty.toLowerCase()
            );
        }

		setFilteredAssignments(filtered);
	}, [searchTerm, filterDifficulty, assignments]);

	const handleDeleteAssignment = async (id) => {
		const assignmentToDelete = assignments.find((assignment) => assignment._id === id);
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

			if (!res.ok) throw new Error("Failed to delete assignment.");

			toast.success("Assignment deleted successfully.");
			setAssignments((prev) => prev.filter((assignment) => assignment._id !== id));
		} catch (error) {
			toast.error(error.message || "Error deleting the assignment.");
		} finally {
			setShowDeleteDialog(false);
		}
	};

	const handleViewAssignment = (id) => navigate(`/assignments/${id}`);
	const handleUpdateAssignment = (id) => navigate(`/update-assignment/${id}`);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-8">Assignments</h1>

			
			<div className="flex flex-col md:flex-row gap-4 mb-8">
				<input
					type="text"
					placeholder="Search by Title"
					className="border rounded p-2 flex-1"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<select
					className="border rounded p-2 flex-1"
					value={filterDifficulty}
					onChange={(e) => setFilterDifficulty(e.target.value)}
				>
					<option value="">All Difficulties</option>
					<option value="Easy">Easy</option>
					<option value="Medium">Medium</option>
					<option value="Hard">Hard</option>
				</select>
			</div>

			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{filteredAssignments.length > 0 ? (
					filteredAssignments.map((assignment) => (
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
					))
				) : (
					<p className="text-gray-500">No assignments found.</p>
				)}
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
		</div>
	);
};

export default Assignments;
