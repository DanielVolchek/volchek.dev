import { useEffect, useState } from "react";

// todo
// add include-media-export

function getWindowDimensions() {
	if (typeof window !== "undefined") {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}
	return null;
}

export default function useBreakpoints() {
	// todo
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (windowDimensions)
		if (windowDimensions.width > 850) {
			return "desktop";
		} else {
			return "mobile";
		}
	else return null;
}
