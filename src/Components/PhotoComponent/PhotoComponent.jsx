
import React, { useState, useEffect } from 'react';
import './PhotoComponent.css'; 

const PhotoComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    //'https://img.freepik.com/psd-premium/modele-couverture-facebook-medias-sociaux-banniere-web-vente-mode-nouvelle-saison_567310-826.jpg?w=2000',
    //'https://img.freepik.com/psd-premium/couverture-facebook-mode-modele-publication-medias-sociaux-banniere-web_565649-307.jpg?w=2000',
    'https://www.rienasemettre.fr/wp-content/uploads/2013/09/chemise-denim-homme-tendances-2019.jpg',
    'https://www.rienasemettre.fr/wp-content/uploads/2015/05/chemises-homme-tendances-2021-2022.jpg' ,
    'https://www.rienasemettre.fr/wp-content/uploads/2012/12/chemise-ville-business-conseils-achat.jpg' ,
    'https://marketplace.canva.com/EAFGCWL1_8Y/1/0/1600w/canva-rouge-et-vert-aquarelle-no%C3%ABl-vente-facebook-couverture-SFMkQ-1JxE0.jpg' ,
    'https://cdn.store-factory.com/www.monsieurmode.fr/media/Cadre%20%C3%A9t%C3%A9%202020%20jeans.jpg' ,
    '' ,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Change l'index de l'image toutes les 2 ou 3  secondes
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      
      {/* Affiche l'image actuelle */}
      <img
  src={images[currentImageIndex]}
  alt={`Paysage ${currentImageIndex + 1}`}
  style={{ width: '100%', height: '60vh' }}
/>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
};

export default PhotoComponent;







/*   

import React from 'react';
import couverture from './couverture.png'; // Import de l'image
import './PhotoComponent.css'; 

const PhotoComponent = () => {

    return (
        <div className="image-container">
            <img src={couverture} alt="Couverture" />
        </div>
    );
};

export default PhotoComponent;

*/