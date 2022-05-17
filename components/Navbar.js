import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Image from "next/image" 
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/">
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/logo2.png"}
          
          objectFit="cover"
          alt=""
          width='500px'
          height='500px'
        ></Image>
      </Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/products/design">SERVICES</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/development">A PROPOS</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/production">CONTACT</Link>
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
          <Link href="/products/design">SERVICES</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/development">A PROPOS</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
