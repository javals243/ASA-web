import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import style from "../../styles/Other.module.css";
import Select from "react-select";
import { toast } from "react-toastify";

const Student = () => {
  const formSparkUrl = `${process.env.NEXT_PUBLIC_URLl}/api/student`;
  const recaptchaKey = "6LdQdAwgAAAAADYwUNsX1OBKYNT5gjf11IaSbSBu";
  const recaptchaRef = useRef();

  // const [formState, setFormState] = useState(initialFormState);
  const [identite, setIdentite] = useState("");
  const [services, setServices] = useState([]);
  const [email, setEmail] = useState("");
   const [reload, setReload] = useState("");
  const [tel, setTel] = useState("");
  const [personNumber, setPersonNumber] = useState(
    0
  );
  const [coordonner, setCoordonner] = useState("");
  const [university, setUniversity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [recaptchaToken, setReCaptchaToken] = useState();

  const serviceTexts = [
    {
      value: "Centre de formation d’anglais",
      label: "Centre de formation d’anglais",
    },
    {
      value: "Escorte de l’aéroport ou gare au domicile ",
      label: "Escorte de l’aéroport ou gare au domicile ",
    },
    {
      value: " Réservation du hostel ou home",
      label: " Réservation du hostel ou home",
    },
    {
      value: "Réservation d’appartement non équiper",
      label: "Réservation d’appartement non équiper",
    },
    {
      value: "Réservation d’appartement déjà équiper",
      label: "Réservation d’appartement déjà équiper",
    },
    {
      value: "Equipement de l’appartement",
      label: "Equipement de l’appartement",
    },
    {
      value: "Familiarisation à la ville ",
      label: "Familiarisation à la ville ",
    },
    {
      value: "Calcule de l’argent qu’il faut pour le quotidien par mois ",
      label: "Calcule de l’argent qu’il faut pour le quotidien par mois ",
    },
  ];
 
const initialFormState =()=> {
   setIdentite("")
    setEmail("")
    setTel("")
    setPersonNumber("")
    setCoordonner("")
    setUniversity("")
   setMessage("")
  }

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await contactSubmitHandler();
    setSubmitting(false)
    initialFormState();
  };
  //  "g-recaptcha-response": recaptchaToken,

  const contactSubmitHandler = async () => {
    const bodyObj = {
      name: identite,
      email,
      services,
      specialDemands: message,
      personNumber,
      coordonner,
      university,
    };

    try {
      const { data: response } = await axios.post(formSparkUrl, bodyObj);
       toast.success("Votre Message est envoyer avec succes ");
      recaptchaRef.current.reset();
    } catch (err) {
     toast.error(`${err.message}`);
    }
  };

  const updateFormControl = (e) => {
    const { id, value } = e.target;
    const key = id;

    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };

  const servicesHandler = (serviceArr) => {
    setServices(serviceArr);
  };

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Contact us</h1>
        <form onSubmit={submitForm} className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="name">Identité</label>
            <input
              className={style.input}
              type="text"
              value={identite}
              onChange={(e) => setIdentite(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              className={style.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="tel">Phone number</label>
            <input
              className={style.input}
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="numberPers">Nombre de personne </label>
            <input
              className={style.input}
              type="number"
              value={personNumber}
              onChange={(e) => setPersonNumber(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="coordonner"> Coordonner</label>
            <input
              className={style.input}
              type="text"
              value={coordonner}
              onChange={(e) => setCoordonner(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="universite"> Université</label>
            <input
              className={style.input}
              type="text"
              placeholder="faculté choisie"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>

          <h3>Quel service avez vous besoin de?</h3>
         
          <Select
            options={serviceTexts}
            isMulti={true}
            onChange={servicesHandler}
          />
          <div className={style.formGroup}>
            <label htmlFor="message">Demandes spéciales</label>
            <textarea
              // onChange={updateFormControl}
              className={style.input}
              // id="message"
              rows={6}
              // value={formState?.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            className={style.recaptcha}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />

          <button type="submit" disabled={submitting} className={style.button1}>
            {submitting ? "Envoyer..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Student;
