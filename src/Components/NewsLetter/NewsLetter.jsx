import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Recevez des Offres Exclusives sur Votre e-mail</h1>
      <p>Abonnez-vous à notre Newsletter et restez informé</p>
      <div>
        <input type="email" placeholder='Votre Email ' />
        <button>S'abonner</button>
      </div>
    </div>
  )
}

export default NewsLetter
