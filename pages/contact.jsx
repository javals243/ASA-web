import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import style from "../styles/Other.module.css";
import Select from "react-select";

const Contact = () => {
  const formSparkUrl = `${process.env.NEXT_PUBLIC_URLl}/api/contact`;
  const recaptchaKey = "6LdQdAwgAAAAADYwUNsX1OBKYNT5gjf11IaSbSBu";
  const recaptchaRef = useRef();

  const initialFormState = {
    name: "",
    email: "",
    tel: "",
    services: [],
    message: "",
  };

  // const [formState, setFormState] = useState(initialFormState);
  const [name, setName] = useState(initialFormState.name);
  const [services, setServices] = useState([]);
  const [email, setEmail] = useState(initialFormState.email);
  const [tel, setTel] = useState(initialFormState.tel);
  const [parag, setParag] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [recaptchaToken, setReCaptchaToken] = useState();
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    setServices(checkedItems);
  };

  const serviceTexts = [
    {
      value: "Escorte de l’aéroport ou gare au domicile",
      label: "Escorte de l’aéroport ou gare au domicile",
    },
    {
      value: "Inscription centre d’anglais et universitaire",
      label: "Inscription centre d’anglais et universitaire",
    },
    {
      value: "Réservation du domicile",
      label: "Réservation du domicile",
    },
    {
      value: "Equipement du domicile",
      label: "Equipement du domicile",
    },
    {
      value: "Familiarisation à la ville",
      label: "Familiarisation à la ville",
    },
  ];

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await contactSubmitHandler();
    setSubmitting(false);
  };
  //  "g-recaptcha-response": recaptchaToken,

  const contactSubmitHandler = async () => {
    const bodyObj = {
      name,
      email,
      phone: tel,
      services,
      specialDemands: message,
    };

    try {
      const { data: response } = await axios.post(formSparkUrl, bodyObj);

      console.log("@@@@ ===> AXIOS RESULTS", response.data);

      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (err) {
      console.log(`Axios Error ${err.message}`);
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

  // console.log("@@@@@ ===>", services);

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Contact us</h1>
        <form onSubmit={submitForm} className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="name">Nom</label>
            <input
              className={style.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              // onChange={updateFormControl}
              className={style.input}
              type="email"
              // id="email"
              // value={formState?.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="tel">Phone number</label>
            <input
              // onChange={updateFormControl}
              className={style.input}
              type="tel"
              // id="tel"
              // value={formState?.tel}
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>

          <h3>Quel service avez vous besoin de?</h3>
          {/* <div className={style.mainLabel}>
            {veggies.map((item) => (
              <div key={item}>
              <input
                  type="checkbox"
                  className={style.inputD}
                  name={item}
                  checked={checkedItems[item]}
                />
                   <label  className={style.label}>
                {item}
              </label>
              </div>
            
            ))}
          </div> */}
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
          <p onChange={(e) => setParag(e.target.value)} value={parag}>
            Selectionner un services:
            {Object.entries(checkedItems).filter(([key, value]) => value)}
          </p>

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

export default Contact;
