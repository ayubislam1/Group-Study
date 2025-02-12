import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-10 border-t border-gray-700">
			<div className="container mx-auto px-6 md:px-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold">Quick Links</h4>
						<nav className="flex flex-col gap-2">
							<Link href="#" className="text-sm hover:text-gray-300 transition">
								Privacy Policy
							</Link>
							<Link href="#" className="text-sm hover:text-gray-300 transition">
								Terms of Service
							</Link>
							<Link href="#" className="text-sm hover:text-gray-300 transition">
								Contact Us
							</Link>
						</nav>
					</div>

					{/* Social Media */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold">Follow Us</h4>
						<div className="flex space-x-4">
							<Link href="#" className="hover:text-blue-400 transition">
								<FaFacebook size={20} />
							</Link>
							<Link href="#" className="hover:text-blue-300 transition">
								<FaTwitter size={20} />
							</Link>
							<Link href="#" className="hover:text-pink-400 transition">
								<FaInstagram size={20} />
							</Link>
						</div>
					</div>

					{/* About */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold">About</h4>
						<p className="text-sm text-gray-400">
							Online-Study is dedicated to providing high-quality educational
							resources.
						</p>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold">Contact</h4>
						<p className="text-sm text-gray-400">
							123 Main Street, Anytown, Bangladesh
							<br />
							support@attendance.com
						</p>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="mt-8 text-center text-sm text-gray-500">
					&copy; 2024 Attendance Management. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
