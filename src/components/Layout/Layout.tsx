interface PrivProps {
	children: any;
}
const Layout = ({ children }: PrivProps) => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default Layout;
