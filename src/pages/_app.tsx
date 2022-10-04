import type { AppType } from "next/dist/shared/lib/utils";
import "@/styles/index.scss";
import { ContextWrapper } from "@/lib/ContextWrapper";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ContextWrapper>
			<Component {...pageProps} />
		</ContextWrapper>
	);
};

export default MyApp;
