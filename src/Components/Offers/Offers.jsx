import React, { useState, useEffect } from 'react';
//import './Offers.css';

const Offers = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://verygoodlord.com/wp-content/uploads/2018/01/meilleures-marques-chemises-homme.jpg', //ok titre chemises
    'https://pro.cousubio.com/images_blog/3/2/9/cover-chemise-homme.jpg',  //presque manequin chemise
    'https://verygoodlord.com/wp-content/uploads/2022/04/meilleurs-marques-de-pantalons-pour-homme.jpg',  // presque 2 pontalons
    'https://www.santosshoes.com/uploads/subcanais2_conteudos/sapatos-cap-toe-para-homem.jpg' ,  //chaussures OK
     
    'https://m.media-amazon.com/images/G/08/AMAZON-FASHION/2023/FASHION/CML_X-PF/Storefront/Feature_Card_Standard_D_CoG_Fashion.jpg' ,  // chemises presque
    'https://fitostic.com/wp-content/uploads/2021/08/quelles-chaussures-porter-avec-un-pantalon-chino-6.jpg' ,
  ]; 

  useEffect(() => {
    const interval = setInterval(() => {
      // Change l'index de l'image toutes les 3 secondes
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
  style={{ width: '100%', height: '50vh', marginTop: '260px' }}
/>
  
    </div>
  );
};

export default Offers;


///////////////////////////

/*import React from 'react';
import nouvellecollection from './nouvellecollection.jpeg'; // Import de l'image
import './offers.css'; 

const Offers = () => {

    return (
        <div className="image-collection">
            <br />
            <br />
          
            <img src={nouvellecollection} alt="" />
        </div>
    );
};

export default Offers;
 */