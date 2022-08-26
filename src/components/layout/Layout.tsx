import React from "react";
import Nav from "@components/Nav";
import ThemeButton from "@components/ThemeButton";

type Props = {
	children: JSX.Element;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<Nav />
			<main>{children}</main>
		</>
	);
}
