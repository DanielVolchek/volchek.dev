import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./Nav.module.scss";

type Props = {
	href: string;
	name: string;
};

export default function NavLink({ href, name }: Props) {
	const ifOnSamePage = () => {
		const { asPath: currentPage } = useRouter();
		return currentPage === href;
	};

	return (
		<Link href={href}>
			<a
				href={href}
				className={`${styles.navlink} ${
					ifOnSamePage() ? styles.active : ""
				}`}>
				{name}
			</a>
		</Link>
	);
}
