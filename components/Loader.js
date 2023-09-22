import { ScaleLoader } from "react-spinners"

export default function Loader() {
	return (
		<div className="loader-container">
			<ScaleLoader size={100} aria-label="Loading Spinner" data-testid="loader" color="#304b74" />
		</div>
	)
}
