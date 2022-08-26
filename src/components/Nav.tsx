import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";

type Props = {};

const Nav = (props: Props) => {
	return (
		<nav className="flex h-4 w-full justify-end">
			<div className="mr-4 flex w-[50%] justify-between">
				<Link href="/" passHref>
					<StyledLink>
						<span>Home</span>
					</StyledLink>
				</Link>
				<Link href="/" passHref>
					<StyledLink>
						<span>About</span>
					</StyledLink>
				</Link>
				<Link href="/" passHref>
					<StyledLink>
						<span>Projects</span>
					</StyledLink>
				</Link>
				<Link href="/" passHref>
					<StyledLink>
						<span>Blog</span>
					</StyledLink>
				</Link>
				<Link href="/" passHref>
					<StyledLink>
						<span>Contact</span>
					</StyledLink>
				</Link>
			</div>
			<ThemeButton _theme={"light"} />
		</nav>
	);
};

const StyledLink: React.FC<{ children: JSX.Element }> = ({ children }) => {
	return <a className="cursor-pointer text-blue-600 underline">{children}</a>;
};

export default Nav;
