import type { NextPage } from "next";

const Err: NextPage = () => {
	return (
		<div>
			<h1>Oops! Looks like you got lost!</h1>
			<h2>Why not try one of these helpful links: </h2>
			<div>
				<a href="https://maps.google.com">Map!</a>
			</div>
		</div>
	);
};

export default Err;
