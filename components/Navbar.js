import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Image from "next/image" 
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
     <div className={style.logo}>
      <Link href="/" passHref>
        <Image className={style.logo}
          src={process.env.NEXT_PUBLIC_URL + "/img/logo1.png"}
          
          objectFit="cover"
          alt=""
          width='300px'
          height='100px'
        ></Image>
      </Link>
      </div>
     <div className={style.menu1}>
        <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/services">SERVICES</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/about">A PROPOS</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={style.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className={style.menuItem}>
          <Link href="/">ACCEUIL</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/services">SERVICES</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/about">A PROPOS</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
     </div>
    </div>
  );
};

export default Navbar;
