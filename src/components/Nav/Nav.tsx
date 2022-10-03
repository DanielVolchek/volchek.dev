import styles from "./Nav.module.scss";
import NavHover from "./NavHover";
import NavLink from "./NavLink";

type Props = {};

export default function Nav({}: Props) {
	return (
		<nav className={styles.nav}>
			<NavHover href="/" name="home">
				<NavLink href="#" name="" />
				<NavLink href="#" name="" />
				<NavLink href="#" name="" />
				<NavLink href="#" name="" />
			</NavHover>
			<NavLink href="/resume" name="Resume" />
			<NavLink href="/contact" name="Contact" />
		</nav>
	);
}
