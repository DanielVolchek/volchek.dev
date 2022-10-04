import type { NextPage } from "next";
import styles from "@/styles/home.module.scss";
import Head from "next/head";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Volchek.Dev</title>
			</Head>
			<main className={styles.home}></main>
		</>
	);
};

export default Home;
