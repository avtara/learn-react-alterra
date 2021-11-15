import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<div className="position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center">
			<h1 className="fw-bold m-1 text-center">404</h1>
			<h3 className="fw-light m-1 text-center">Page Not Found</h3>
			<button
				onClick={() => navigate("/")}
				className={`nav-link mt-3 mx-auto ${styles.button}`}
			>
				Back to Home
			</button>
		</div>
	);
}
