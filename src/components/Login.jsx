import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirige al usuario a la página principal o a la sección de administrador
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='container'>
      <h2 className='title is-2'>Iniciar sesión</h2>
      <div className='columns is-vcentered'>
        {error && <p>{error}</p>}
        <div className='column is-4'>  
          <div className='padre'>
            <div className='card card-body'>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Iniciar sesión</button>
            </form>
            </div>
          </div>
        </div>
        <div className='column is-8'>
          <img src="login.png" alt="login" className='tamaño-img' />
        </div>
      </div>
    </div>
  );
  }


export default Login;
