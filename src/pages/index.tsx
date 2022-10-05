import type { NextPage } from "next";
import styles from "@/styles/home.module.scss";
import Head from "next/head";
import { useAppStateConsumer } from "@/lib/ContextWrapper";
import Developer from "@/layouts/Developer";
import Dreamer from "@/layouts/Dreamer";
const Home: NextPage = () => {
	const appState = useAppStateConsumer();

	return (
		<>
			<Head>
				<title>Volchek.Dev</title>
			</Head>
			{appState === "Developer" ? <Developer /> : <Dreamer />}
		</>
	);
};

export default Home;
