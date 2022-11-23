import { type NextPage } from "next";

const Home: NextPage = () => {
  return <></>;
};

export const getStaticProps = async () => {
  return {
    redirect: {
      destination: "https://github.com/danielvolchek",
      permanent: true,
    },
  };
};

export default Home;
