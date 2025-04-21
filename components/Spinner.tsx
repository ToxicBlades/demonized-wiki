// components/Spinner.tsx
type SpinnerProps = {
	size?: "small" | "medium" | "large";
};

const Spinner: React.FC<SpinnerProps> = ({ size = "medium" }) => {
	let spinnerSizeClass = "";

	switch (size) {
		case "small":
			spinnerSizeClass = "h-4 w-4";
			break;
		case "medium":
			spinnerSizeClass = "h-8 w-8";
			break;
		case "large":
			spinnerSizeClass = "h-12 w-12";
			break;
		default:
			spinnerSizeClass = "h-8 w-8";
	}

	return (
		<div
			className={`spinner-border inline-block animate-spin rounded-full border-4 border-t-transparent ${spinnerSizeClass}`}
			role="status"
		>
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default Spinner;
