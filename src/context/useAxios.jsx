import axios from "axios";

import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
	baseURL: "http://localhost:7000",
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
