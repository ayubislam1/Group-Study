import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";

const MyAssignments = () => {
	const [assignments, setAssignments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [assignment, setAssignment] = useState([]);
	const { user } = useAuth();
	
	useEffect(() => {
		

		axios
			.get(`http://localhost:7000/submit-assignment`)
			.then((response) => {
			setAssignments(response.data);
            setLoading(false);
			})
			.catch((err) => console.error("Error fetching assignments: ", err));
	}, [user]);

	useEffect(() => {
		try {
			if (assignments && user?.email) {
				const filteredAssignment = assignments.filter(
					(assignmentItem) => assignmentItem.email === user.email
				);
				setAssignment(filteredAssignment);
                
			}
		} catch (err) {
			console.log("Failed to load campaigns. Please try again later.");
		} 
	}, [assignments, user]);
	if (loading) {
		return <Loading></Loading>;
	}

	else if (!user)
		return (
			<div className="min-h-screen flex justify-center items-center">
				Please log in to view your assignments.
			</div>
		);

	else if (assignments.length === 0) {
		return (
			<div className="text-center mt-10">No assignments submitted yet.</div>
		);
	}

	return (
		<div className="container mx-auto p-5">
			<h1 className="text-2xl font-bold mb-5">My Submitted Assignments</h1>
			<table className="w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-100">
						<th className="border border-gray-300 p-2">Title</th>
						<th className="border border-gray-300 p-2">Status</th>
						<th className="border border-gray-300 p-2">Total Marks</th>
						<th className="border border-gray-300 p-2">Obtained Marks</th>
						<th className="border border-gray-300 p-2">Feedback</th>
					</tr>
				</thead>
				<tbody>
					{assignment.map((assignment) => (
						<tr key={assignment.id}>
							<td className="border border-gray-300 p-2">{assignment.title}</td>
							<td className="border border-gray-300 p-2 capitalize">
								{assignment.status}
							</td>
							<td className="border border-gray-300 p-2">{assignment.marks}</td>
							<td className="border border-gray-300 p-2">
								{assignment.ObtainMarks ?? "Pending"}
							</td>
							<td className="border border-gray-300 p-2">
								{assignment.note || "N/A"}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyAssignments;
