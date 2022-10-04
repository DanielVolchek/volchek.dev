import PageToggle from "@/components/PageToggle/PageToggle";
import Developer from "@/layouts/Developer";
import Dreamer from "@/layouts/Dreamer";
import { useAppStateConsumer } from "@/lib/ContextWrapper";
import type { NextPage } from "next";
import { useRef } from "react";

const test: NextPage = () => {
	const toggler = useRef(<PageToggle />);

	const appState = useAppStateConsumer();

	return <>{appState === "Developer" ? <Developer /> : <Dreamer />}</>;
};

export default test;
