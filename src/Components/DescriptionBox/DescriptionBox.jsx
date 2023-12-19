import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box"> Politique de Livraison</div>
        
      </div>
      <div className="descriptionbox-description">
        <p> Pour nos clients à Casablanca, la livraison Express est notre engagement : vos colis seront entre vos mains en moins de 24 heures.</p>
        <p>
        Pour les autres villes, notre service rapide garantit une réception entre 48 et 72 heures. Nous comprenons l'importance de la ponctualité et nous nous engageons à vous offrir un service de livraison fiable et rapide, quel que soit l'endroit où vous vous trouvez au Maroc. Profitez de vos achats sans attendre grâce à notre logistique efficace.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
