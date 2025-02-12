import  { useContext } from "react";
import { ThemeContext } from "../context/ContextProvider";
import { Navigate} from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";

const PrivateRouter = ({ children }) => {
	


	const { user,loader} = useAuth();

	if(loader){
		return (
			<div className="flex h-screen w-full items-center justify-center">
			  <div className="flex flex-col items-center space-y-4">
				<div className="h-8 w-8 animate-spin text-gray-500 dark:text-gray-400" />
				<p className="text-gray-500 dark:text-gray-400"><Loading></Loading></p>
			  </div>
			</div>
		  );
	}
	if (user && user?.email) {
		return children;
	}

	
	return <Navigate to={`/register`}  />;
};

export default PrivateRouter;
