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
	let state: AppState = "Developer";

	return (
		<AppContext.Provider
			value={{
				appState: state,
				setAppState: (value) => {
					console.log(`setting state from ${state} to ${value}`);
					state = value;
					console.log(`state is now ${state}`);
				},
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
