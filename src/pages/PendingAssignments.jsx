import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";

const PendingAssignments = () => {
	const [pendingAssignments, setPendingAssignments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true); // Start loading before making the API call.
		axios
			.get(
				`https://assignment-11-backend-theta.vercel.app/submit-assignment?search=${search}`,
				{
					withCredentials: true,
				}
			)
			.then((response) => {
				setPendingAssignments(
					response.data.filter(
						(assignment) =>
							assignment?.email === user?.email &&
							assignment.status === "pending"
					)
				);
			})
			.catch((err) => {
				console.error("Error fetching pending assignments: ", err);
			})
			.finally(() => {
				setLoading(false); // Stop loading after the API call is completed.
			});
	}, [user,search]);

	if (loading) {
		return <Loading />; // Show the loading component while fetching data.
	}

	if (!user) {
		return <div>Please log in to view pending assignments.</div>;
	}

	if (pendingAssignments?.length === 0) {
		return (
			<div className="min-h-screen flex justify-center items-center">
				No pending assignments to evaluate.
			</div>
		);
	}

	return (
		<div className="container mx-auto p-5 min-h-screen">
			<input
					type="text"
					placeholder="search"
					className="input border rounded p-2 text-black"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			<h1 className="text-2xl font-bold mb-5">Pending Assignments</h1>
			<table className="w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-100 dark:bg-transparent">
						<th className="border border-gray-300 p-2">Title</th>
						<th className="border border-gray-300 p-2">Marks</th>
						<th className="border border-gray-300 p-2">Examinee Name</th>
						<th className="border border-gray-300 p-2">Action</th>
					</tr>
				</thead>
				<tbody>
					{pendingAssignments.map((assignment) => (
						<tr key={assignment._id}>
							<td className="border border-gray-300 p-2 ">
								{assignment.title}
							</td>
							<td className="border border-gray-300 p-2 text-center">
								{assignment.marks}
							</td>
							<td className="border border-gray-300 p-2 text-center ">
								{assignment.name}
							</td>
							<td className="border border-gray-300 p-2 text-center ">
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
