import { datapays } from "../../data";
import style from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Pays = ({ pays }) => {
  return (
    <>
      <Head>
        <title>Assistance sejour et acceuil</title>
        <meta
          name="description"
          content="Assistance sejour et acceuil"
        />
      </Head>
        <div className={style.container}>
      <div className={style.cardL}>
        {pays.sites.map((site) => (
        <Link key={pays.id} href={`${site.link}`} passHref>
          <div key={site.id} className={style.imgContainer}>
            <Image src={`${process.env.NEXT_PUBLIC_URL}/img/${site.image}`} layout="fill" objectFit="cover" alt="vonjour les zizi" />
          </div>
          </Link>
        ))}
      </div>
      <div className={style.cardS}>
        <h1 className={style.title}>ASA - {pays.name}</h1>
        <p className={style.desc}>{pays.longDesc}</p>
        
      </div>
    </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const pays = datapays;
  const paths = pays.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const pays = datapays.filter((item) => item.name === name)[0];
  return {
    props: { pays },
  };
};

export default Pays;
