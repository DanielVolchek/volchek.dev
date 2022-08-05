import { useRef, useState } from "react";
import { Layout_NavStyles as styles } from "../../styles/StylesModuleAPI";

interface PrivProps {
	toggleNavMenu: Function;
}
const HamburgerMenu = ({ toggleNavMenu }: PrivProps) => {
	const [menuState, toggleState] = useState(false);
	const svgRef = useRef<SVGSVGElement>(null);

	// add animation and show menu
	const onClick = () => {
		toggleNavMenu();
		// calculate from scss
		console.log("on");
		const anim_time = 1250;
		const anim_class = `animate_${!menuState ? "forwards" : "backwards"}`;
		svgRef.current?.classList.add(anim_class);
		setTimeout(
			() => svgRef.current?.classList.remove(anim_class),
			anim_time
		);
	};
	return (
		<svg
			className={styles.ham}
			onClick={onClick}
			ref={svgRef}
			viewBox="0 0 100 80"
			width="40"
			height="40">
			<rect width="100" height="20" rx="8"></rect>
			<rect y="30" width="100" height="20" rx="8"></rect>
			<rect y="60" width="100" height="20" rx="8"></rect>
		</svg>
	);
};

export default HamburgerMenu;
