import PageToggle from "@/components/PageToggle/PageToggle";
import { useAppStateConsumer } from "@/lib/ContextWrapper";
import { AppState } from "@/lib/types";
import styles from "./MainHeroModule.module.scss";

type Props = {
	HeroAbout: React.ReactNode;
};

export default function MainHeroModule({ HeroAbout }: Props) {
	const appState = useAppStateConsumer();

	return (
		<main className={`${getClassFromState(appState)}`}>
			<p>Hi there! I'm...</p>
			<h2>Daniel Volchek</h2>
			<p>A...</p>
			<PageToggle />
			<section>
				<p>{HeroAbout}</p>
			</section>
		</main>
	);
}

const getClassFromState = (appState: AppState) => {
	return appState === "Developer" ? styles.developer : styles.dreamer;
};
