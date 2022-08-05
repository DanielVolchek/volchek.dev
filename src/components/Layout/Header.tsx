import { useEffect, useRef, useState } from "react";

import { Layout_NavStyles as styles } from "../../../styles/StylesModuleAPI";
import ThemesContainer from "../ThemesContainer";
import Navbar from "./Navbar";

const Header = () => {
	const [themeShown, showTheme] = useState(false);
	const [style, setStyle] = useState<any>(null);

	// use this to translate the theme selector up and down
	const themeOuterContainerRef = useRef<HTMLDivElement>(null);

	// const pressedThemeButton = () => {
	// 	console.log("pressed");
	// 	let newTranslate = "";
	// 	let newDisplay = "block";
	// 	if (themeOuterContainerRef.current) {
	// 		if (themeShown) {
	// 			newTranslate = `translate(0px, ${-themeOuterContainerRef.current
	// 				.clientHeight}px)`;
	// 			newDisplay = "none";
	// 		} else {
	// 			newTranslate = "translate(0px, 0px)";
	// 		}
	// 		setStyle({ transform: newTranslate, display: newDisplay });
	// 		showTheme(!themeShown);
	// 	}
	// };

	const oldHeight = useRef(0);
	const modifying = false;
	const pressedThemeButton = () => {
		if (modifying) return;
		console.log("pressed");
		let newHeight = "";
		if (themeOuterContainerRef.current) {
			if (themeShown) {
				newHeight = "0";
			} else {
				newHeight = "125px";
			}
			setStyle({ height: newHeight });
			showTheme(!themeShown);
		}
	};
	return (
		<header>
			<div
				style={style}
				className={styles.themeOuterContainer}
				ref={themeOuterContainerRef}>
				<ThemesContainer />
			</div>
			<Navbar active="home" pressedThemeButton={pressedThemeButton} />
		</header>
	);
};

export default Header;
