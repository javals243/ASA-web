import  React, {useRef,useState,useEffect} from 'react'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";
import style from "../styles/Other.module.css"

const Contact = () => {
  const formSparkUrl = `${process.env.NEXT_PUBLIC_URLl}/api/email`;
  const recaptchaKey = '6LdQdAwgAAAAADYwUNsX1OBKYNT5gjf11IaSbSBu';
  const recaptchaRef = useRef();

const initialFormState={
  name:'',
  email:'',
  tel:'',
  services:{},
  message:''
}
  // const [formState, setFormState] = useState(initialFormState);
   const [name, setName] = useState(initialFormState.name);
    const [services, setServices] = useState(initialFormState.services);
    const [email, setEmail] = useState(initialFormState.email);
     const [tel, setTel] = useState(initialFormState.tel);
  const [parag, setParag] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [recaptchaToken, setReCaptchaToken] = useState();
   const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
  
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
      setServices(checkedItems)
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
    const payload = {name,email,tel,message,services
    };
    console.log("yours payload are ",payload)

    // try {
    //   const result = await axios.post(formSparkUrl, payload);
    //   console.log(result);
    //   setMessage({
    //     class: "bg-green-500",
    //     text: "Thanks, someone will be in touch shortly.",
    //   });
    //   setFormState(initialFormState);
    //   recaptchaRef.current.reset();
    // } catch (error) {
    //   console.log(error);
     
    // }
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
              // onChange={updateFormControl}
              className={style.input}
              type="text"
              // id="name"
              // value={formState?.name}
              value={name}
              onChange={(e)=>setName(e.target.value)}
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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setTel(e.target.value)}
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
              // onChange={updateFormControl}
              className={style.input}
              // id="message"
              rows={6}
              // value={formState?.message}
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
          </div>
           {/* <input  onChange={(e)=>setParag(e.target.value)} value={parag}>
          Selectionner un services:
          {Object.entries(checkedItems).filter(([key, value]) => value)}</input> */}

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
