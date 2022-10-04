import { useContext, useEffect, useRef, useState } from "react";
import styles from "./PageToggle.module.scss";
import { useAppStateConsumer, useAppStateUpdater } from "@/lib/ContextWrapper";

export default function PageToggle() {
	const coverRef = useRef<HTMLHeadingElement>(null);
	const appState = useAppStateConsumer();
	const setAppState = useAppStateUpdater();

	useEffect(() => {
		animateUpdate();
	}, [appState]);

	const animateUpdate = () => {
		if (!coverRef.current) return;
		coverRef.current.classList.add(styles.animateHeaderClass as string);
		setTimeout(() => {
			if (coverRef.current)
				coverRef.current.classList.remove(
					styles.animateHeaderClass as string
				);
		}, 500);
	};

	const updatePage = () => {
		// animate click
		animateUpdate();
		// update page in global state
		const update = appState === "Developer" ? "Dreamer" : "Developer";
		setAppState(update);
	};

	return (
		<span onClick={updatePage} className={styles.pagetoggle}>
			<div ref={coverRef} className={styles.cover}></div>
			{appState}
		</span>
	);
}
