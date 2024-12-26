import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import ArrowUp from "../components/ui/ArrowUp";

const MainLayOuts = () => {
	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<ArrowUp></ArrowUp>
			<Footer></Footer>
		</>
	);
};

export default MainLayOuts;
