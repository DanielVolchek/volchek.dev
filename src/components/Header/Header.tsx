import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<Nav />
		</header>
	);
}
