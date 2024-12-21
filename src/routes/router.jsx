import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayOuts from "../layouts/MainLayOuts";
import Home from "../pages/Home";

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
		],
	},
]);

export default router;
