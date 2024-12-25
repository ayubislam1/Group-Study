import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayOuts from "../layouts/MainLayOuts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Resgister";
import Assignments from "../pages/Assignments";
import PendingAssignments from "../pages/PendingAssignments";
import CreateAssignment from "../pages/CreateAssignment";
import MyAssignment from "../pages/MyAssignment";
import UpdateAssignment from "../pages/UpdateAssignment";
import AssignmentDetail from "../pages/AssignmentDetailes";
import GiveMark from "../pages/GiveMark";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayOuts></MainLayOuts>,
		errorElement: <h1>Error</h1>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/assignments",
				element: <Assignments></Assignments>,
			},
			{
				path: "/pending_assignments",
				element: <PendingAssignments></PendingAssignments>,
			},
			{
				path: "/create_assignments",
				element: <CreateAssignment></CreateAssignment>,
			},
			{
				path: "/my_assignments",
				element: <MyAssignment></MyAssignment>,
			},
			{
				path: `/update-assignment/:id`,
				element: <UpdateAssignment></UpdateAssignment>,
			},
			{
				path: "/assignments/:id",
				element: <AssignmentDetail></AssignmentDetail>,
			},
			{
				path:"/give-mark/:id",
				element:<GiveMark></GiveMark>
			}
		],
	},
]);

export default router;
