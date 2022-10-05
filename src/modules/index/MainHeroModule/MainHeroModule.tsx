import PageToggle from "@/components/PageToggle/PageToggle";
import { useAppStateConsumer } from "@/lib/ContextWrapper";
import useModuleStyles from "@/lib/hooks/useModuleStyles";
import { AppState } from "@/lib/types";
import styles from "./MainHeroModule.module.scss";

type Props = {
	HeroAbout: React.ReactNode;
};

export default function MainHeroModule({ HeroAbout }: Props) {
	const appState = useAppStateConsumer();
	const useStyle = useModuleStyles(styles);

	return (
		<main className={useStyle}>
			<p>Hi there! I'm...</p>
			<h2>Daniel Volchek</h2>
			<p>A...</p>
			<h1>
				<PageToggle />
			</h1>
			<section>
				<p>{HeroAbout}</p>
			</section>
		</main>
	);
}
