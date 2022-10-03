import { useContext, useRef, useState } from "react";
import styles from "./PageToggle.module.scss";
import { useAppStateConsumer, useAppStateUpdater } from "@/lib/ContextWrapper";

export default function PageToggle() {
	const h1Ref = useRef<HTMLHeadingElement>(null);
	const appState = useAppStateConsumer();
	const setAppState = useAppStateUpdater();

	const animateUpdate = () => {
		if (!h1Ref.current) return;
		h1Ref.current.classList.add(styles.animateHeader as string);
	};

	const updatePage = () => {
		// animate click
		animateUpdate();
		// update page in global state
		const update = appState === "Developer" ? "Dreamer" : "Developer";
		setAppState(update);
	};

	return (
		<span ref={h1Ref} onClick={updatePage} className={styles.pagetoggle}>
			{appState}
		</span>
	);
}
