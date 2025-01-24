import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Configuración de Firebase proporcionada por Firebase Console
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

<<<<<<< HEAD
=======
/*const firebaseConfig = {
  apiKey: "AIzaSyBE8rCjdvacHCfHR-rEpbdQp21jrgmHU9A",
  authDomain: "bar-app-utn.firebaseapp.com",
  projectId: "bar-app-utn",
  storageBucket: "bar-app-utn.firebasestorage.app",
  messagingSenderId: "39910297556",
  appId: "1:39910297556:web:f37b0b935f23a6d28e9041"
};

VITE_API_KEY="AIzaSyBE8rCjdvacHCfHR-rEpbdQp21jrgmHU9A"
VITE_AUTH_DOMAIN="bar-app-utn.firebaseapp.com"
VITE_PROJECT_ID="bar-app-utn"
VITE_STORAGE_BUCKET="bar-app-utn.firebasestorage.app"
VITE_MESSAGING_SENDER_ID="39910297556"
VITE_APP_ID="1:39910297556:web:f37b0b935f23a6d28e9041"
*/


>>>>>>> 0ccf8ad (agregando el boton para registrarse)
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Inicializa Firestore
const db = getFirestore(app);

// Log para validar la conexión a la base de datos
console.log("Conexión a Firestore establecida:", db);

export default db;
<<<<<<< HEAD
export { auth };
=======
export { auth };
>>>>>>> 0ccf8ad (agregando el boton para registrarse)
