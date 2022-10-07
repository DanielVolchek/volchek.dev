import { useContext, useEffect, useRef, useState } from "react";
import styles from "./PageToggle.module.scss";
import { useAppStateConsumer, useAppStateUpdater } from "@/lib/ContextWrapper";
import GlitchBackground from "../GlitchBackground/GlitchBackground";

export default function PageToggle() {
	const coverRef = useRef<HTMLHeadingElement>(null);
	const spanRef = useRef<HTMLSpanElement>(null);

	const appState = useAppStateConsumer();
	const setAppState = useAppStateUpdater();

	const [showing, setShowing] = useState(false);
	useEffect(() => {
		setShowing(true);

		const resetCallback = () => {
			setShowing(false);
		};

		// todo
		// switch out images with generator
		// https://snorpey.github.io/jpg-glitch/
		const animationTimeout = setTimeout(resetCallback, 300);
		animateUpdate();

		return () => {
			resetCallback();
			clearTimeout(animationTimeout);
		};
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
		// if (!coverRef.current) return;
		// coverRef.current.classList.add(styles.animateHeaderClass as string);
		// setTimeout(() => {
		// 	if (coverRef.current)
		// 		coverRef.current.classList.remove(
		// 			styles.animateHeaderClass as string
		// 		);
		// }, 200);
	};

	const updatePage = () => {
		// animate click
		animateUpdate();
		// update page in global state
		const update = appState === "Developer" ? "Dreamer" : "Developer";
		setAppState(update);
	};

	return (
		<>
			{showing && <GlitchBackground />}
			<span
				data-text={appState}
				ref={spanRef}
				onClick={updatePage}
				className={`${styles.pagetoggle} ${styles.bouncetop}`}>
				{appState}
			</span>
		</>
	);
}
