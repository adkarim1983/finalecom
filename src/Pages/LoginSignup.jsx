import React from 'react'
import './CSS/LoginSignup.css';


const LoginSignup = () => {
  /*
  const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:1337/auth/local/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name, // Assumption: Strapi uses 'username' for name
          email,
          password,
        }),
      });

      if (response.ok) {
        // Si la requête est réussie, vous pouvez rediriger l'utilisateur vers une autre page ou afficher un message de succès.
        console.log('Inscription réussie !');
      } else {
        console.error('Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  */

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>S'inscrire</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Votre Nom' />
          <input type="email" placeholder='Votre Email ' />
          <input type="password" placeholder='Mot de Pass' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Vous avez déjà un compte? <span>Connectez-Vous</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>En continuant, j'accepte les conditions d'utilisation et la politique de confidentialité.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
