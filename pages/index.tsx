import type { NextPage } from "next";
import { SyntheticEvent, useEffect, useRef } from "react";

import styles from "../styles/pages/Home.module.scss";
const Home: NextPage = () => {
	// on inital page load set opacity to 1
	// set transition here as well to keep elements of animation together
	useEffect(() => {
		if (h1ref.current) {
			h1ref.current.style.transition = "opacity 2s ease-in";
			h1ref.current.style.opacity = "1";
		}
		// const theme: Theme = {
		// 	primaryTextColor: '#000',
		// 	secondaryTextColor: '#fff',
		// 	primaryBGColor: '#fff',
		// 	secondaryBGColor: '#fff',
		// };
		// setTheme(document.documentElement, theme);
	}, []);
	const h1ref = useRef<HTMLHeadingElement>(null);
	return (
		<>
			<div className={styles.landing}>
				<h1 className={styles.header} ref={h1ref}>
					This page is a work in progress.
					<p>Please check back in later to see it completed </p>
				</h1>
				<EmailForm />
			</div>
		</>
	);
};

const EmailForm = () => {
	const saveEmail = async (formSubmission: any) => {
		const response = await fetch("/api/email", {
			method: "POST",
			body: JSON.stringify(formSubmission),
		});
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return await response.json();
	};
	const onSubmit = async (event: SyntheticEvent) => {
		event.preventDefault();
		console.log("submitted");
		try {
			await saveEmail({
				// @ts-ignore
				firstName: event.target.firstName.value,
				// @ts-ignore
				lastName: event.target.lastName.value,
				// @ts-ignore
				email: event.target.email.value,
			});
			alert("Success!");
			// @ts-ignore
			event.target.firstName.value = "";
			// @ts-ignore
			event.target.lastName.value = "";
			// @ts-ignore
			event.target.email.value = "";
		} catch (err: any) {
			console.error(err);
		}
	};

	return (
		<div className={styles.form}>
			<h2>Enter your contact info to be notified on release</h2>
			<form method="post" onSubmit={onSubmit}>
				<label htmlFor="firstName">First name:</label>
				<input type="text" id="firstName" name="firstName" required />
				<label htmlFor="lastName">Last name:</label>
				<input type="text" id="lastName" name="lastName" required />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" required />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
export default Home;
