import { useContext } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeContext } from "../context/ContextProvider";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
	const { user, signOutUser } = useContext(ThemeContext);

	const handleEvent = () => {
		signOutUser()
			.then(() => {
				console.log("signout");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border ">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="lg:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
						<span className="text-2xl font-bold">JoB</span>
					</Link>
					<div className="grid gap-2 py-6">
						<Link
							to={"/"}
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Home
						</Link>
						<Link
							to={"/assignments"}
							href=""
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Assignments
						</Link>
						{user && (
							<>
								<Link
									to={""}
									href=""
									className="flex w-full items-center py-2 text-lg font-semibold"
									prefetch={false}
								>
									Pending Assignments
								</Link>
								
							</>
						)}
						{!user && (
							<>
								<Link
									to={"/login"}
									href="/login"
									className="flex w-full items-center py-2 text-lg font-semibold"
									prefetch={false}
								>
									Log In
								</Link>
								<Link
									to={"/register"}
									href="/register"
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
				<span className="text-2xl">JoB</span>
			</Link>

			<nav className="ml-auto hidden lg:flex gap-6">
				<Link
					to={"/"}
					href="/"
					className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
				>
					Home
				</Link>
				<Link
					to={"/assignments"}
					href=""
					className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
				>
					Assignments
				</Link>
				{user && (
					<>
						<Link
							to={""}
							href=""
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
							href="/login"
							className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
						>
							Log In
						</Link>
						<Link
							to={"/register"}
							href="/register"
							className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
						>
							Register
						</Link>
						<Avatar>
							<AvatarImage src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</>
				) : (
					<div className="flex items-center gap-4">
						<div className="relative">
							<img
								src={user.photoURL}
								alt="User Photo"
								className="h-10 w-10 rounded-full cursor-pointer"
								onMouseOver={() => user.displayName}
							/>
						</div>
						<Button variant="outline" onClick={handleEvent}>
							Log Out
						</Button>
					</div>
				)}
				<ModeToggle></ModeToggle>
			</nav>
		</header>
	);
}
