import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import { data,datapays } from "../data";


export default function Home({ services,pays }) {
  return (
    <div>
      <Head>
        <title>Assistance service et acceuil</title>
        <meta
          name="description"
          content="Assistance service et acceuil"
        />
      </Head>
      <Intro pays={pays} />
     
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  const pays = datapays;
  return {
    props: { services,pays },
  };
};
