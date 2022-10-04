import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";
import { AppState } from "./types";

type Props = {
	children: React.ReactNode;
};

const AppContext = React.createContext<{
	appState: AppState;
	setAppState: (value: AppState) => void;
}>({
	appState: "Developer",
	setAppState() {},
});

export function ContextWrapper({ children }: Props) {
	const [appState, setAppState] = useState<AppState>("Developer");

	return (
		<AppContext.Provider
			value={{
				appState,
				setAppState,
				// setAppState: (value) => {
				// 	setState(value);
				// },
			}}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppStateUpdater() {
	return useContext(AppContext).setAppState;
}

export function useAppStateConsumer() {
	return useContext(AppContext).appState;
}
