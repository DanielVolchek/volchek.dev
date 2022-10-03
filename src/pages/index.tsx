import type { NextPage } from "next";
import styles from "@/styles/home.module.scss";
import Head from "next/head";
import Hero from "@/components/Hero/Hero";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Volchek.Dev</title>
			</Head>
			<main className={styles.home}>
				<Hero />
			</main>
		</>
	);
};

export default Home;
