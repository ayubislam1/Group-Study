import { useState, useContext } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import registerAnimation from "../assets/Register.json";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router";
import { ThemeContext } from "../context/ContextProvider";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Register() {
	const { createUser, googleProvider, githubProvider } =
		useContext(ThemeContext);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [errormessage, setErrormessage] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photoUrl = form.photoUrl.value;
		const email = form.email.value;
		const pass = form.pass.value;
		const newUser = { name, photoUrl, email };
		setErrormessage("");
		const regex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;

		if (!regex.test(pass)) {
			setErrormessage(
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
			);
			return;
		}

		createUser(email, pass)
			.then(() => {
				fetch("http://localhost:7000/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newUser),
				})
					.then((res) => res.json())
					.then((data) => {
					
						if (data.insertedId) {
							Swal.fire({
								position: "top-center",
								icon: "success",
								title: "Sign up success",
								showConfirmButton: false,
								timer: 1500,
							});
							navigate("/");
							form.reset();
						}
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleClick = () => {
		setLoading(true);
		googleProvider()
			.then(() => {
				setLoading(false);
				navigate("/");
			})
			.catch(() => {
				setLoading(false);
				setError("Google Sign-In failed. Please try again.");
				console.log(error);
			});
	};

	const handleClick2 = () => {
		setLoading(true);
		githubProvider()
			.then(() => {
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				setError("GitHub Sign-In failed. Please try again.");
				console.log(error);
			});
	};

	return (
		<Card className="max-w-7xl mx-auto my-5 flex flex-col lg:flex-row items-center border-none shadow-md">
			<div className="flex-1 p-5">
				<CardHeader>
					<CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold">
						Create an account
					</CardTitle>
					<CardDescription className="text-sm md:text-base">
						Enter your information to create an account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="full-name">Full name</Label>
							<Input
								id="full-name"
								placeholder="John Doe"
								name="name"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="Photo-url">Photo URL</Label>
							<Input
								id="Photo-url"
								placeholder="Photo URL"
								name="photoUrl"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="me@example.com"
								name="email"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<div className="relative">
								<Input
									id="password"
									placeholder="Password"
									type={showPassword ? "text" : "password"}
									name="pass"
									required
								/>
								<span
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
								>
									{showPassword ? (
										<EyeOffIcon className="w-5 h-5 text-gray-600" />
									) : (
										<EyeIcon className="w-5 h-5 text-gray-600" />
									)}
								</span>
							</div>
							<p className="text-red-500 text-xs md:text-sm">{errormessage}</p>
						</div>
						<div className="flex items-center space-x-2">
							<Checkbox />
							<p className="text-xs md:text-sm">
								I agree to the{" "}
								<span className="underline">Terms & Conditions</span>
							</p>
						</div>
						<Button className="w-full dark:text-white">
							{loading ? "Loading.." : "Sign up"}
						</Button>
						<div className="flex items-center gap-4">
							<Separator className="flex-1" />
							<span className="text-muted-foreground">OR</span>
							<Separator className="flex-1" />
						</div>
						<div className="flex justify-evenly gap-2">
							<Button
								className="w-full bg-transparent border hover:bg-black text-black dark:text-white dark:bg-primary hover:text-white"
								onClick={handleClick}
							>
								Google
							</Button>
							<Button
								className="w-full bg-transparent border hover:bg-black text-black dark:text-white dark:bg-primary hover:text-white"
								onClick={handleClick2}
							>
								GitHub
							</Button>
						</div>
						<p className="text-center text-sm md:text-base">
							Already have an account?
							<Link to="/login" className="underline font-semibold ">
								{" "}
								Sign in
							</Link>
						</p>
					</form>
				</CardContent>
			</div>
			<div className="max-w-full w-full md:w-1/2 object-contain p-5 ">
				<Lottie animationData={registerAnimation}></Lottie>
			</div>
		</Card>
	);
}
//
