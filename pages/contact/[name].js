import React, { useState } from 'react';
import Circle from "../../components/Circle"
import style from "../../styles/Contact.module.css";

const Contact = ({pays}) => {
   const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };
  const veggies = [" Escorte de l’aéroport ou gare au domicile "," Inscription centre d’anglais et universitaire ", "Réservation du domicile ", "Equipement du domicile ","Familiarisation à la ville "];
  return (
    <div className={style.container}>
      <Circle
        backgroundColor="green"
        left="-40vh"
        top="-20vh"
        className={style.circle}
      />
      <Circle
        backgroundColor="yellow"
        right="-30vh"
        bottom="-60vh"
        className={style.circle}
      />
      <h1 className={style.title}>Contact</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        

         <div>
        <h3>Avez vous besoin de quel service ?</h3>
        {veggies.map((item) => (
          <label key={item} className={style.label}>
            <input
              type="checkbox"
              className={style.inputD}
              name={item}
              checked={checkedItems[item]}
              onChange={handleChange}
            />
            {item}
          </label>
        ))}
        {/* <p>
          Selectionner un services:{" "}
          {Object.entries(checkedItems).filter(([key, value]) => value)}{" "}
        </p>{" "}
        <br /> */}
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
      </div>
        <button className={style.button}>Envoyer</button>
      </form>

     
    </div>
  );
};

export default Contact;
