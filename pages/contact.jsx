import  React, {useRef,useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import style from "../styles/Other.module.css"

const Contact = () => {
   const formId = "CWRbvIso";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = '6LdQdAwgAAAAADYwUNsX1OBKYNT5gjf11IaSbSBu';
  const recaptchaRef = useRef();
 
  const initialFormState = {
    email: "",
    name: "",
    message: "",
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
    setFormState(initialFormState.message = checkedItems)
  };
  const veggies = [" Escorte de l’aéroport ou gare au domicile "," Inscription centre d’anglais et universitaire ", "Réservation du domicile ", "Equipement du domicile ","Familiarisation à la ville "];

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
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
      setMessage({
        class: "bg-red-500",
        text: "Sorry, there was a problem. Please try again or contact support.",
      });
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
        <h1 className={style.title}>
Contact us
        </h1>
        {message && (
          <div className={`my-4 text-white w-full p-4 ${message.class}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={submitForm} className={style.form}>
         
          <div className={style.formGroup}>
            <label htmlFor="name">Name</label>
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
          <div></div>
         <div className={style.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              onChange={updateFormControl}
              className={style.input}
              id="message"
              rows={6}
              value={formState?.message}
            ></textarea>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            className={style.recaptcha}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />

          <button
            disabled={submitting}
            className={style.button1}
          >
            {submitting ? "Envoyer..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
