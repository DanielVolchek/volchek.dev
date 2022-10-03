import PageToggle from "@/components/PageToggle/PageToggle";
import type { NextPage } from "next";

const test: NextPage = () => {
	return (
		<div>
			<h1>Test Component</h1>

			<h1>
				<PageToggle />
			</h1>

			<PageToggle />
		</div>
	);
};

export default test;
