import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/ui/Loading"; // Your loading component

// Import charting components
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import useAuth from "../hooks/useAuth";

const MyAssignments = () => {
  const { user, isLoading } = useAuth(); 
  const [assignments, setAssignments] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAssignments() {
      if (user?.email) {
        console.log("Making API request for user email:", user.email);
        try {
          const response = await axios.get(
            `https://assignment-11-backend-theta.vercel.app/submit-assignment?email=${user.email}`,
            { withCredentials: true }
          );
          setAssignments(response.data || []);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching assignments:", err.response?.data || err);
          setLoading(false);
        }
      } else {
        console.error("User email is undefined.");
      }
    }
    fetchAssignments();
  }, [user]);

  useEffect(() => {
    if (Array.isArray(assignments) && assignments.length > 0 && user?.email) {
      const filteredAssignment = assignments.filter(
        (assignmentItem) => assignmentItem.email === user.email
      );
      setAssignment(filteredAssignment);
    } else {
      setAssignment([]);
    }
  }, [assignments, user]);

  if (loading || isLoading) {
    return <Loading />;
  } else if (assignments.length === 0) {
    return (
      <div className="text-center min-h-screen flex justify-center items-center">
        No assignments submitted yet.
      </div>
    );
  }

  // Prepare chart data based on the assignment data
  const chartData = assignment.map((assignmentItem) => ({
    month: assignmentItem.title, // Use title or another field for the month or label
    desktop: assignmentItem.marks, // Assuming marks are the total marks
    mobile: assignmentItem.ObtainMarks || 0, // Assuming ObtainMarks are the obtained marks
  }));

  return (
    <div className="container mx-auto p-5 min-h-screen mb-10">
      <h1 className="text-2xl font-bold mb-5">My Submitted Assignments</h1>

      {/* Table with horizontal scrolling on smaller screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 dark:bg-transparent">
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Total Marks</th>
              <th className="border border-gray-300 p-2">Obtained Marks</th>
              <th className="border border-gray-300 p-2">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {assignment.map((assignmentItem) => (
              <tr key={assignmentItem._id}>
                <td className="border border-gray-300 p-2">{assignmentItem.title}</td>
                <td className="border border-gray-300 p-2 capitalize text-center">
                  {assignmentItem.status}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {assignmentItem.marks}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {assignmentItem.ObtainMarks ?? "Pending"}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {assignmentItem.note || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card for the chart */}
      <Card className="container mx-auto overflow-x-auto mt-10">
        <CardHeader>
          <CardTitle>Total Marks vs Obtained Marks</CardTitle>
          <CardDescription>Based on Submitted Assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart width={730} height={250} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)} // Customize this to match your data
              // Making XAxis responsive by wrapping it inside a div
            />
            <Tooltip cursor={false} />
            <Bar dataKey="desktop" fill="hsl(var(--chart-1))" radius={4} name="Total Marks" />
            <Bar dataKey="mobile" fill="hsl(var(--chart-2))" radius={4} name="Obtained Marks" />
          </BarChart>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending data for total and obtained marks
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total marks vs obtained marks for each assignment
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyAssignments;
