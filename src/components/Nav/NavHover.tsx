import useBreakpoints from "@/lib/hooks/useBreakpoints";
import React, { MouseEventHandler, useState } from "react";
import NavLink from "./NavLink";

type Props = {
	href: string;
	name: string;
	children: React.ReactNode;
};

export default function NavHover({ href, name, children }: Props) {
	const [showingLinks, setShowing] = useState(false);
	const breakpoint = useBreakpoints();

	// const onMouseEnter = (event: MouseEventHandler<HTMLSpanElement>) => {};
	// const onMouseLeave = (event: MouseEventHandler<HTMLSpanElement>) => {};

	const onMouseEnter = () => {
		if (!showingLinks /* and below breakpoint*/) {
			setShowing(true);
		}
	};

	const onMouseLeave = () => {
		if (showingLinks /* and below breakpoint*/) {
			setShowing(false);
		}
	};

	return (
		<>
			<span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				<NavLink href={href} name={name} />
			</span>
			{showingLinks && <section>{children}</section>}
		</>
	);
}
