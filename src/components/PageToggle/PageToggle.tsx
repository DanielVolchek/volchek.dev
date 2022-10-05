import { useContext, useEffect, useRef, useState } from "react";
import styles from "./PageToggle.module.scss";
import { useAppStateConsumer, useAppStateUpdater } from "@/lib/ContextWrapper";

export default function PageToggle() {
	const coverRef = useRef<HTMLHeadingElement>(null);
	const spanRef = useRef<HTMLSpanElement>(null);

	const appState = useAppStateConsumer();
	const setAppState = useAppStateUpdater();

	useEffect(() => {
		animateUpdate();
	}, [appState]);

	// useEffect(() => {
	// 	const timeoutAdd = setTimeout(() => {
	// 		if (!spanRef.current) return;
	// 		spanRef.current.classList.add(styles.bouncetop as string);
	// 	}, 250);

	// 	// const timeoutRemove = setTimeout(() => {
	// 	// 	if (!spanRef.current) return;
	// 	// 	spanRef.current.classList.remove(styles.bouncetop as string);
	// 	// }, 500);
	// 	return () => {
	// 		clearTimeout(timeoutAdd);
	// 		clearTimeout(timeoutRemove);
	// 	};
	// }, []);

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
		<span
			ref={spanRef}
			onClick={updatePage}
			className={`${styles.pagetoggle} ${styles.bouncetop}`}>
			<div ref={coverRef} className={styles.cover}></div>
			{appState}
		</span>
	);
}
