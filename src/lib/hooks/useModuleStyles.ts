import { useEffect } from "react";
import { useAppStateConsumer } from "../ContextWrapper";
import { AppState } from "../types";

export default function useModuleStyles(styles: {
	readonly [key: string]: string;
}) {
	const appState = useAppStateConsumer();

	return `${styles.global} ${getClassFromState(appState, styles)}`;
}

const getClassFromState = (
	appState: AppState,
	styles: { readonly [key: string]: string }
) => {
	return appState === "Developer" ? styles.developer : styles.dreamer;
};
