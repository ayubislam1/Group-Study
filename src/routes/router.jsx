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
import PrivateRouter from "./PrivateRouter";

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
				element: <PrivateRouter><PendingAssignments></PendingAssignments></PrivateRouter>,
			},
			{
				path: "/create_assignments",
				element: <PrivateRouter><CreateAssignment></CreateAssignment></PrivateRouter>,
			},
			{
				path: "/my_assignments",
				element:<PrivateRouter> <MyAssignment></MyAssignment></PrivateRouter>,
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
				path: "/give-mark/:id",
				element: <GiveMark></GiveMark>,
			},
		],
	},
]);

export default router;
