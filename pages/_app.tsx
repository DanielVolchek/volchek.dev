import type { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	// return <Layout children={<Component {...pageProps} />} />;
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
