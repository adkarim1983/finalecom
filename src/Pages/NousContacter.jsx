import React, { useState } from 'react';
import './CSS/NousContacter.css'; 


const NousContacter = () => {
  // Ajout des informations de contact
  const [contactInfo] = useState({
    adresse: "123 Boulvard El Massira",
    telephone: "06 06 30 63 06",
    emailContact: "contact@eleganceempire.com",
  });

  const [nom, setNom] = useState('');
  const [telephoneClient, setTelephoneClient] = useState('');
  const [emailClient, setEmailClient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu pourrais ajouter la logique pour envoyer les données à ton backend, ou traiter le formulaire
    // Par exemple : envoi à une API, envoi par e-mail, etc.
    console.log({
      nom,
      telephoneClient,
      emailClient,
      message,
    });
    // Réinitialisation des champs après la soumission du formulaire
    setNom('');
    setTelephoneClient('');
    setEmailClient('');
    setMessage('');
  };

  return (
    <div className="nous-contacter-container">
      <h2>Nous Contacter</h2>
      {/* Informations de contact */}
      <div className="contact-info">
        <p>Adresse: {contactInfo.adresse}</p>
        <p>Téléphone: {contactInfo.telephone}</p>
        <p>Email: {contactInfo.emailContact}</p>
      </div>

      {/* Formulaire de contact */}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Votre Téléphone"
          value={telephoneClient}
          onChange={(e) => setTelephoneClient(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Votre E-mail"
          value={emailClient}
          onChange={(e) => setEmailClient(e.target.value)}
          required
        />
        <textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
    </div>
  );
};

export default NousContacter;
