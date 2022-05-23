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
          ASA a pour vision de rendre la RDC,le Kenya,l'Ouganda, le,le Burundi
          et le Rwanda votre second chez vous
        </p>{" "}
        <div className={style.socialContainer}>
          <div
            className={style.socialIcon}
            style={{ backgroundColor: "#3B5999" }}
            color="3B5999"
          >
            <Facebook />
          </div>{" "}
          <div
            className={style.socialIcon}
            style={{ backgroundColor: "#E4405F" }}
            color=""
          >
            <Instagram />
          </div>{" "}
          <div
            className={style.socialIcon}
            style={{ backgroundColor: "#55ACEE" }}
            color="55ACEE"
          >
            <Twitter />
          </div>{" "}
          <div
            className={style.socialIcon}
            style={{ backgroundColor: "#E60023" }}
            color="E60023"
          >
            <Pinterest />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={style.center}>
        <h3 className={style.title}> SERVICES </h3>{" "}
        <ul className={style.list}>
          <li className={style.listItem}>
            {" "}
            Escorte de l’aéroport ou gare au domicile
          </li>
          <li className={style.listItem}>
            {" "}
            Inscription centre d’anglais et universitaire{" "}
          </li>
          <li className={style.listItem}> Réservation du domicile</li>
          <li className={style.listItem}> Familiarisation à la ville </li>
          <li className={style.listItem}> Equipement du domicile</li>
        </ul>
      </div>
      <div className={style.right}>
        <h3 className={style.title}> Contact </h3>{" "}
        <div className={style.contactItem}>
          <Room style={{ marginRight: "5px" }} />
          Av de goma nord-kivu , ville de goma
        </div>{" "}
        <div className={style.contactItem}>
          <Phone style={{ marginRight: "5px" }} /> +243 977 047 777
          <br />
          +254 768 386 511
        </div>{" "}
        <div className={style.contactItem}></div>
        <MailOutline style={{ marginRight: "5px" }} />{" "}
        contact@assistancesejouracceuil.com{" "}
      </div>
    </div>
  );
};

export default Footer;
