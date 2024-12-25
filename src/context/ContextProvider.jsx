/* eslint-disable react-hooks/rules-of-hooks */

import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebaseConfig";
import { GithubAuthProvider } from "firebase/auth";


// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
	const [user, setUsers] = useState(null);
	const [loader, setLoader] = useState(true);
	
	const googleProvider = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	const githubProvider = () => {
		const provider = new GithubAuthProvider();
		return signInWithPopup(auth, provider);
	};
	const createUser = (email, pass) => {
		return createUserWithEmailAndPassword(auth, email, pass);
	};
	const signinUser = (email, pass) => {
		return signInWithEmailAndPassword(auth, email, pass);
	};
	const signOutUser = () => {
		return signOut(auth);
	};
	useEffect(() => {
		const useSub = onAuthStateChanged(auth, (currentUser) => {
			setUsers(currentUser);
		});

		return () => {
			useSub();
		};
	}, []);
	const authInfo = {
		createUser,
		signOutUser,
		signinUser,
		user,
		googleProvider,
		loader,
		githubProvider,
	};
	return (
		<ThemeContext.Provider value={authInfo}>{children}</ThemeContext.Provider>
	);
};

export default ContextProvider;
