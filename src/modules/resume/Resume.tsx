import React from "react";
import styles from "./Resume.module.scss";

export default function Resume() {
	return (
		<main>
			<div className={styles.ABOUT_ME}>
				<h2>ABOUT_ME</h2>
			</div>
			<div className={styles.EXPERIENCE}>
				<h2>EXPERIENCE</h2>
			</div>
			<div className={styles.PROJECTS}>
				<h2>PROJECTS</h2>
			</div>
			<div className={styles.SKILLS}>
				<h2>SKILLS</h2>
			</div>
			<div className={styles.LANGS}>
				<h2>LANGS</h2>
			</div>
		</main>
	);
}

const ABOUT_ME = "";

const EXPERIENCE = [];

const PROJECTS = [];

const SKILLS = [];

const LANGS = [];
