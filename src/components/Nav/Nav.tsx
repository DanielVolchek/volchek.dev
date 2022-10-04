import styles from "./Nav.module.scss";
import NavHover from "./NavHover";
import NavLink from "./NavLink";

type Props = {};

export default function Nav({}: Props) {
	return (
		<nav className={styles.nav}>
			<NavHover href="/" name="home">
				<NavLink href="#" name="Link1" />
				<NavLink href="#" name="Link2" />
				<NavLink href="#" name="Link3" />
				<NavLink href="#" name="Link4" />
			</NavHover>
			<NavLink href="/resume" name="Resume" />
			<NavLink href="/contact" name="Contact" />
		</nav>
	);
}
