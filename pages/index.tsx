import type { NextPage } from "next";
import Image from "next/image";
import face_img from "../public/myface.jpg";
import { useEffect, useRef } from "react";

import styles from "../styles/pages/Home.module.scss";
const Home: NextPage = () => {
	// on inital page load set opacity to 1
	// set transition here as well to keep elements of animation together
	useEffect(() => {
		if (h1ref.current) {
			h1ref.current.style.transition = "opacity 2s ease-in";
			h1ref.current.style.opacity = "1";
		}
		// const theme: Theme = {
		// 	primaryTextColor: '#000',
		// 	secondaryTextColor: '#fff',
		// 	primaryBGColor: '#fff',
		// 	secondaryBGColor: '#fff',
		// };
		// setTheme(document.documentElement, theme);
	}, []);
	const h1ref = useRef<HTMLHeadingElement>(null);
	return (
		<>
			<div className={styles.landing}>
				<h1 className={styles.header} ref={h1ref}>
					This page is a work in progress.
					<p>Please check back in later to see it completed </p>
				</h1>
			</div>
		</>
	);
};

export default Home;
