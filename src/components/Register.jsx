<<<<<<< HEAD
import React, { useState } from 'react';
import { auth } from '../config/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirige al usuario a la página principal o a la sección de administrador
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Registrarse</h2>
      {error && <p>{error}</p>}
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
=======
import React, { useState } from 'react';
import { auth } from '../config/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirige al usuario a la página principal o a la sección de administrador
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Registrarse</h2>
      {error && <p>{error}</p>}
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
>>>>>>> 0ccf8ad (agregando el boton para registrarse)
