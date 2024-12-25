import React, { useContext } from "react";
import { ThemeContext } from "../context/ContextProvider";



const useAuth = () => {
	const context = useContext(ThemeContext);
	return context;
};

export default useAuth;
