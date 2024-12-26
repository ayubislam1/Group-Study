import { Button } from "@/components/ui/button";

export default function ArrowUp() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="fixed bottom-4 right-4 ">
			<Button
				variant="outline"
				className="hover:bg-primary"
				size="icon"
				onClick={scrollToTop}
			>
				<ArrowUpIcon className="h-6 w-6 " />
				<span className="sr-only">Scroll to top</span>
			</Button>
		</div>
	);
}

function ArrowUpIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m5 12 7-7 7 7" />
			<path d="M12 19V5" />
		</svg>
	);
}
