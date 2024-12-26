import axios from "axios";

import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
	baseURL: "https://assignment-11-backend-theta.vercel.app",
	withCredentials: true,
});

const useAxios = () => {
	const { signOutUser } = useAuth();
	const navigate = useNavigate();
	useEffect(() => {
		instance.interceptors.response.use(
			(response) => {
				return response;
			},
			(error) => {
				if (error.status === 401 || error.status === 403) {
					console.log("logout");
					signOutUser().then(() => {
						console.log("logout");
						navigate("/login");
					});
				}

				return Promise.reject(error);
			}
		);
	}, []);
	return instance;
};

export default useAxios;
