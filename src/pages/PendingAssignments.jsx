import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

const PendingAssignments = () => {
	const [pendingAssignments, setPendingAssignments] = useState([]);
	console.log(pendingAssignments);
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) return;

		axios
			.get("http://localhost:7000/submit-assignment")
			.then((response) => {
				setPendingAssignments(
					response.data.filter((assignment) => assignment.email == user.email)
				);
			})
			.catch((err) =>
				console.error("Error fetching pending assignments: ", err)
			);
	}, [user]);

	if (!user) return <div>Please log in to view pending assignments.</div>;

	if (pendingAssignments.length === 0) {
		return (
			<div className="text-center mt-10">
				No pending assignments to evaluate.
			</div>
		);
	}

	return (
		<div className="container mx-auto p-5">
			<h1 className="text-2xl font-bold mb-5">Pending Assignments</h1>
			<table className="w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-100">
						<th className="border border-gray-300 p-2">Title</th>
						<th className="border border-gray-300 p-2">Marks</th>
						<th className="border border-gray-300 p-2">Examinee Name</th>
						<th className="border border-gray-300 p-2">Action</th>
					</tr>
				</thead>
				<tbody>
					{pendingAssignments.map((assignment) => (
						<tr key={assignment._id}>
							<td className="border border-gray-300 p-2">{assignment.title}</td>
							<td className="border border-gray-300 p-2">{assignment.marks}</td>
							<td className="border border-gray-300 p-2">
								{assignment.examineeName}
							</td>
							<td className="border border-gray-300 p-2">
								<Button
									onClick={() => navigate(`/give-mark/${assignment._id}`)}
									className="bg-blue-500 text-white px-3 py-2 rounded"
								>
									Give Mark
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PendingAssignments;
