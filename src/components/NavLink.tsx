import styles from "../../styles/components/Nav.module.scss"
import Link from "next/link";
import useAsPathFromRouter from "../hooks/useAsPathFromRouter";

const NavLink: React.FC<{ href: string }> = ({ href }) => {
	const path = useAsPathFromRouter();

    let name = href.slice(1);
    // if (name.length !== 0)
    //     name = name.charAt(0).toUpperCase() + name.slice(1);
	return (
		<Link href={href}>
			<a
				className={`${styles.link} ${
					path === href ? styles.active : ""
				}`}>
				{name === '' ? 'Home' : name}
			</a>
		</Link>
	);
};

export default NavLink;
