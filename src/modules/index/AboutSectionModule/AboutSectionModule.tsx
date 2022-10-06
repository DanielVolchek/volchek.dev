import React from "react";
import Image from "next/image";

type Props = {
	AboutMeAside: React.ReactNode;
};
import styles from "./AboutSectionModule.module.scss";

export default function AboutSectionModule({ AboutMeAside }: Props) {
	return (
		<section className={styles.aboutmodule}>
			<h3>---About Me---</h3>
			<div>
				{/* todo */}
				{/* <Image src={"helloworld.jpg"} className={styles.aboutimg} /> */}
				<p className={styles.content}>{AboutMeAside}</p>
			</div>
		</section>
	);
}
