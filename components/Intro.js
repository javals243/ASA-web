import style from "../styles/Intro.module.css";
import Image from "next/image";
import Link from "next/link";

const Intro = ({pays}) => {
  return (
    <div className={style.container}>
       
      <div className={style.info}>
        <h1 className={style.title}>Pays ou nous pouvons vous aider</h1>
        <h1 className={style.subtitle}>Choisissez votre destination</h1>
        <div className={style.services}>
          {pays?.map((pays) => (
            <Link key={pays.id} href={`/pays/${pays.name}`} passHref>
              <div className={style.service}>
               
                <span className={style.cat}>{pays.name}</span>
                <div className={style.media}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/${pays.flag}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
