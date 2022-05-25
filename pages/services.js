import React from 'react'
import style from '../styles/Services.module.css'
function services() {
  return (
    <div>
      <div className={style.container}>
        <h1>Nos Services</h1>
        <div className={style.row}>
          <div className={style.service}>
            <h2>1.  Escorte de l’aéroport ou gare au domicile</h2>
            <p></p>
          </div>
          <div className={style.service}>
            <h2>2. Réservation du domicile</h2>
            <p></p>
          </div>
          <div className={style.service}>
            <h2>3. Equipement du domicile</h2>
            <p></p>
          </div>
          <div className={style.service}>
            <h2>4. Inscription centre d’anglais et universitaire</h2>
            <p></p>
          </div>
          <div className={style.service}>
            <h2>5. Familiarisation à la ville</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services