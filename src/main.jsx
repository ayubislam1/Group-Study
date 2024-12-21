import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import { ThemeProvider } from "./components/theme-provider.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ContextProvider>
		
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<RouterProvider router={router} />
			</ThemeProvider>
		</ContextProvider>
	</StrictMode>
);
