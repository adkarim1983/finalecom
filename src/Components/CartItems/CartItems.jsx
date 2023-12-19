import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  let indexCounter = -1;
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart, cartSize } = useContext(ShopContext);
  console.log("hello this is the size in last page : >>>", cartSize)
  console.log(cartSize)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberValidated, setPhoneNumberValidated] = useState(false);
  const [showInformationSection, setShowInformationSection] = useState(false); // Nouvel état

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleValidation = () => { 
    // Vérification simple, ici on suppose que le numéro doit avoir 10 chiffres
    if (phoneNumber.length === 10 && !isNaN(phoneNumber)) {
      setPhoneNumberValidated(true);
    } else {
      alert('Veuillez entrer un numéro de téléphone valide.');
    }
  };

  const handleContinue = () => {
    setShowInformationSection(true); // Met à jour l'état pour afficher la section "Vos Informations"
  };

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Produit</p>
        <p>Titre</p>
        <p>Taille</p>
        <p>Prix</p>
        <p>Quantité </p>
        <p>Total</p>
        <p>Supprimer</p>

      </div>
      <hr />

{all_product.map((e) => {
    if (cartItems[e.id] > 0) {

        // Assuming cartSize contains objects with a 'productId' field that matches e.id

        const currentIndex = indexCounter++; // Increment the counter for each mapped item

        return (
            <div key={currentIndex}>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>Size: {cartSize[indexCounter]} </p>
                    <p>{e.new_price} Dh</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price * cartItems[e.id]} Dh</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                </div>
                <hr />
            </div>
        );
    }
    return null;
})}


      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Détails de Facture :</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>{getTotalCartAmount()} dh</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Frais de Livraison</p>
              <p>Gratuit</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>TOTAL</h3>
              <h3>{getTotalCartAmount()} Dh</h3>
            </div>
          </div>
          <button onClick={handleContinue}>CONTINUER</button>
        </div>
              {showInformationSection && (

        <div className="cartitems-promocode">

           <h1> Vos Informations</h1>
          <p>Saisir Votre Nom :</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='Votre Nom' />
          </div>
          <p>Saisir Votre Numéro de Téléphone: :</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='0600000000' value={phoneNumber} onChange={handlePhoneChange} />

            <button onClick={handleValidation}>Confirmer Votre Achat</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          {phoneNumberValidated && (
            <div className="additional-section">

              <h3>1. Confirmation</h3>
              <p>Félicitations !  EleganceEmpire vous remercie ! Votre commande a été prise en compte. Vous recevrez un appel ou un SMS de la part de notre service client pour la confirmation de Votre commande. Vous recevrez également un récapitulatif par email.</p>
              <h3>2. Expédition :</h3>
              <p>Votre commande sera expédiée et livrée à la date et au lieu mentionnés au moment de la confirmation de la commande par téléphone.</p>
              <h4>* Livraison CASABLANCA :</h4>
              <p> Pour nos clients à Casablanca, la livraison Express est notre engagement : vos colis seront entre vos mains en moins de 24 heures.</p>
              <h4>* Livraison Hors CASABLANCA :</h4>
              <p>Pour les autres villes, notre service rapide garantit une réception entre 48 et 72 heures. Nous comprenons l'importance de la ponctualité et nous nous engageons à vous offrir un service de livraison fiable et rapide, quel que soit l'endroit où vous vous trouvez au Maroc. Profitez de vos achats sans attendre grâce à notre logistique efficace.</p>

            </div>
          )}

        </div>
              )}

      </div>
    </div>
  )
}

export default CartItems

// <p>{cartItems[e.id] > 0 ? e.size.find((size, index) => index === cartItems[e.id] - 1) || 'N/A' : 'N/A'}</p>  deja testé 