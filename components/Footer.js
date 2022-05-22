import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import style from "../styles/Footer.module.css"
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div> ASA. </div>{" "}
        <p className={style.desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’ t look even slightly
          believable.{" "}
        </p>{" "}
        <div className={style.socialContainer}>
          <div className={style.socialIcon} color="3B5999">
            <Facebook />
          </div>{" "}
          <div className={style.socialIcon}  color="E4405F">
            <Instagram />
          </div>{" "}
          <div className={style.socialIcon} color="55ACEE">
            <Twitter />
          </div>{" "}
          <div className={style.socialIcon}  color="E60023">
            <Pinterest />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={style.center}>
        <h3 className={style.title}> Useful Links </h3>{" "}
        <ul className={style.ListItem}>
          <li className={style.listItem}> Home </li> <li className={style.listItem}> Cart </li>{" "}
          <li className={style.listItem}> Man Fashion </li>{" "}
          <li className={style.listItem}> Woman Fashion </li>{" "}
          <li className={style.listItem}> Accessories </li> <li className={style.listItem}> My Account </li>{" "}
          <li className={style.listItem}> Order Tracking </li> <li> Wishlist </li>{" "}
          <li className={style.listItem}> Wishlist </li> <li className={style.listItem}> Terms </li>{" "}
        </ul>
      <div className={style.right}>
        <h3 className={style.title}> Contact </h3>{" "}
        <div className={style.contactItem}>
          <Room style={{ marginRight: "10px" }} />
          Av de goma nord-kivu , ville de goma
        </div>{" "}
        <div className={style.contactItem}>
          <Phone style={{ marginRight: "10px" }} /> +243 99 58 68 621
        </div>{" "}
        <div className={style.contactItem}></div>
          <MailOutline style={{ marginRight: "10px" }} /> contact@exemple.dev{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
