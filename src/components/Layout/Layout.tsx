import Header from "./Header";
import Footer from "./Footer";

interface PrivProps {
	children: any;
}
const Layout = ({ children }: PrivProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
