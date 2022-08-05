import { Layout_NavStyles as styles } from "../../../styles/StylesModuleAPI";
import Link from "next/link";
import NavLink from "../NavLink";
import { useRef, useState } from "react";
import HamburgerMenu from "../ HamburgerMenu";

interface PrivProps {
	active: string;
	pressedThemeButton: Function;
}
const Navbar = ({ active, pressedThemeButton }: PrivProps) => {
	const [themeSelecter, toggleThemeSelector] = useState(false);
	const UP_ARROW = <>&uarr;</>;
	const DOWN_ARROW = <>&darr;</>;

	const [ARROW_SYMBOL, toggleARROW] = useState(DOWN_ARROW);

	const onThemeClick = () => {
		pressedThemeButton();
		if (!themeSelecter) {
			toggleThemeSelector(true);
			toggleARROW(UP_ARROW);
		} else {
			toggleThemeSelector(false);
			toggleARROW(DOWN_ARROW);
		}
	};

	const navRef = useRef<HTMLDivElement>(null);

	return (
		<nav className={styles.nav} ref={navRef}>
			<Link href="/">
				<a></a>
			</Link>
			<div className={styles.linksContainer}>
				<NavLink href="/" />
				<NavLink href="/about" />
				<NavLink href="/resume" />
				<NavLink href="/blog" />
			</div>
			<button onClick={onThemeClick} className={styles.themeBtn}>
				{ARROW_SYMBOL} Theme
			</button>
			<HamburgerMenu toggleNavMenu={() => {}} />
		</nav>
	);
};
export default Navbar;
