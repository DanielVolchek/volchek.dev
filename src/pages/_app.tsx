import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "../layouts/base";
import "devicon/devicon.min.css";
import "../styles/globals.css";
import "../styles/prism.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
