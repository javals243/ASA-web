import React from 'react'
import style from '../styles/Services.module.css'
function services() {
  return (
    <div>
      <div className={style.container}>
        <h1>Nos Services</h1>
        <div className={style.row}>
        
            <div className={style.service}>
            
            <h2>Web Design</h2>
            <p>
             Escorte de l’aéroport ou gare au domicile
            </p>
          </div>
            <div className={style.service}>
            
            <h2>Web Design</h2>
            <p>
            Réservation du domicile
            </p>
          </div>
            <div className={style.service}>
            
            <h2>Web Design</h2>
            <p>
             Equipement du domicile
            </p>
          </div>
            <div className={style.service}>
            
            <h2>Web Design</h2>
            <p>
            Inscription centre d’anglais et universitaire
            </p>
          </div>
              <div className={style.service}>
            
            <h2>Web Design</h2>
            <p>
            
Familiarisation à la ville
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services