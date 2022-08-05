import "../styles/util/colors.scss";
import "../styles/util/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return <Layout children={<Component {...pageProps} />} />;
}

export default MyApp;
