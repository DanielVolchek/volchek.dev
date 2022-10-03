import Header from "../Header/Header";
import styles from "./Hero.module.scss";

export default function Hero() {
	return (
		<div className={styles.hero}>
			<Header />
			<p>Hi! I'm</p>
			<h1>Daniel Volchek</h1>
			<h2>A Junior Front-End Developer</h2>
		</div>
	);
}
