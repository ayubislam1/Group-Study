import { useContext, useEffect, useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeContext } from "../context/ContextProvider";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
	const { user, signOutUser } = useContext(ThemeContext);
	const [showDisplayName, setShowDisplayName] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleEvent = () => {
		signOutUser()
			.then(() => {
				console.log("signout");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.closest(".relative")) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<header className="flex h-20 w-full  items-center px-4 md:px-6  border-b-2 sticky top-0 z-50 bg-white">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="lg:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
						<span className="text-2xl font-bold text-blue-500">StudyDo</span>
					</Link>
					<div className="grid gap-2 py-6">
						<Link
							to={"/"}
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Home
						</Link>
						<Link
							to={"/assignments"}
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Assignments
						</Link>
						{user && (
							<>
								<Link
									to={"/pending_assignments"}
									className="flex w-full items-center py-2 text-lg font-semibold"
									prefetch={false}
								>
									Pending Assignments
								</Link>

								<Link
									className="flex w-full items-center py-2 text-lg font-semibold"
									onClick={handleEvent}
									prefetch={false}
								>
									Log out
								</Link>
							</>
						)}
						{!user && (
							<>
								<Link
									to={"/login"}
									className="flex w-full items-center py-2 text-lg font-semibold"
									prefetch={false}
								>
									Log In
								</Link>
								<Link
									to={"/register"}
									className="flex w-full items-center py-2 text-lg font-semibold"
									prefetch={false}
								>
									Register
								</Link>
								
							</>
						)}
					</div>
				</SheetContent>
			</Sheet>

			<Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
				<img
					src="https://i.ibb.co.com/Dnd4tsv/istockphoto-1197901679-612x612-removebg-preview-1.png"
					className="w-10 h-10 mr-1"
					alt=""
				/>
				<span className="text-3xl text-blue-500 font-semibold">
					<i>StudyDo</i>
				</span>
			</Link>

			<nav className="ml-auto hidden lg:flex gap-6">
				<Link
					to={"/"}
					className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
				>
					Home
				</Link>
				<Link
					to={"/assignments"}
					className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
				>
					Assignments
				</Link>
				{user && (
					<>
						<Link
							to={"/pending_assignments"}
							className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
						>
							Pending Assignments
						</Link>
					</>
				)}
				{!user ? (
					<>
						<Link
							to={"/login"}
							className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
						>
							Log In
						</Link>
						<Link
							to={"/register"}
							className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
						>
							Register
						</Link>
					</>
				) : (
					<div className="relative">
						<div
							className="flex items-center gap-4 cursor-pointer"
							onMouseEnter={() => setShowDisplayName(true)}
							onMouseLeave={() => setShowDisplayName(false)}
							onClick={() => setDropdownOpen(!dropdownOpen)}
						>
							<img
								src={user.photoURL}
								alt="User Photo"
								className="h-10 w-10 rounded-full"
							/>
							{showDisplayName && (
								<span className="absolute w-24 top-full mt-1 bg-blue-400 text-white-900 text-base py-1 px-2 rounded-b-md rounded-tr-md shadow-md z-10">
									{user.displayName}
								</span>
							)}
						</div>
						{dropdownOpen && (
							<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md z-50">
								<Link
									to="/create_assignments"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Create Assignments
								</Link>
								<Link
									to="/my_assignments"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									My Assignments
								</Link>
								<div className="border-t my-2"></div>
								<Button
									variant="ghost"
									className="w-full text-left px-4 py-2 text-sm text-gray-700  hover:bg-blue-400 dark:hover:text-white"
									onClick={handleEvent}
								>
									Log Out
								</Button>
							</div>
						)}
					</div>
				)}
				<ModeToggle />
			</nav>
		</header>
	);
}
