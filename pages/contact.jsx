import  React, {useRef,useState,useEffect} from 'react'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";
import style from "../styles/Other.module.css"

const Contact = () => {
  const formSparkUrl = `${process.env.NEXT_PUBLIC_URLl}/api/email`;
  const recaptchaKey = '6LdQdAwgAAAAADYwUNsX1OBKYNT5gjf11IaSbSBu';
  const recaptchaRef = useRef();


   
 
  const initialFormState = {
    email: "",
    name: "",
    tel:"",
    services:{},
    message: "",
    employee:"",

  };

  const [formState, setFormState] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState();
  const [recaptchaToken, setReCaptchaToken] = useState();
   const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
  
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
    setFormState(initialFormState.services= Object.entries(checkedItems).filter(([key, value]) => value))
  
  };
  const veggies = [" Escorte de l’aéroport ou gare au domicile "," Inscription centre d’anglais et universitaire ", "Réservation du domicile ", "Equipement du domicile ","Familiarisation à la ville "];

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };
  //  "g-recaptcha-response": recaptchaToken,

  const postSubmission = async () => {
    const payload = {
      ...formState,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: "bg-green-500",
        text: "Thanks, someone will be in touch shortly.",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
     
    }
  };

  const updateFormControl = ( e) => {
    const { id, value } = e.target;
    const key = id 
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Contact us</h1>
        <form onSubmit={submitForm} className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="name">Nom</label>
            <input
              onChange={updateFormControl}
              className={style.input}
              type="text"
              id="name"
              value={formState?.name}
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              onChange={updateFormControl}
              className={style.input}
              type="email"
              id="email"
              value={formState?.email}
            />
          </div>
           <div className={style.formGroup}>
            <label htmlFor="tel">Phone number</label>
            <input
              onChange={updateFormControl}
              className={style.input}
              type="tel"
              id="tel"
              value={formState?.tel}
            />
          </div>
           <div className={style.formGroup}>
            <label htmlFor="employee">Métier</label>
            <input
              onChange={updateFormControl}
              className={style.input}
              type="text"
              id="employee"
              value={formState?.employee}
            />
          </div>

            <h3>Quel service avez vous besoin de?</h3>
            <div className={style.mainLabel}>
            {veggies.map((item) => (
              <div key={item}>
              <input
                  type="checkbox"
                  className={style.inputD}
                  name={item}
                  checked={checkedItems[item]}
                  onChange={handleChange}
                />
                   <label  className={style.label}>
                {item}
              </label>
              </div>
            
            ))}
          </div>
          <div className={style.formGroup}>
            <label htmlFor="message">Demandes spéciales</label>
            <textarea
              onChange={updateFormControl}
              className={style.input}
              id="message"
              rows={6}
              value={formState?.message}
            ></textarea>
          </div>
           <p id='services' value={formState?.services}>
          Selectionner un services:{" "}
          {Object.entries(checkedItems).filter(([key, value]) => value)}{" "}
        </p>{" "}
        <br />

          <ReCAPTCHA
            ref={recaptchaRef}
            className={style.recaptcha}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />

          <button disabled={submitting} className={style.button1}>
            {submitting ? "Envoyer..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
