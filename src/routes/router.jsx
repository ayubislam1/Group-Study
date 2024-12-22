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
		],
	},
]);

export default router;
