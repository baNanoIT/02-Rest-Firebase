const admin = require('firebase-admin');
// ServiceAccount es un JSON con la información necesario para acceder a la base de datos de firebase
// ¿Cómo se obtuvo? Firebase > Proyecto > Configuraciones > Cuentas de servicio > Generar cuenta (descarga el archivo)
const serviceAccount = require('./firebase-config/firebaseServiceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;



// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // Configuración de Firebase (reemplaza con tu configuración real)
// const firebaseConfig = {
//     apiKey: "AIzaSyBdWFns9eECgMxApbHR8E5CogQcwAUAQfA",
//     authDomain: "rest-38bcd.firebaseapp.com",
//     projectId: "rest-38bcd",
//     storageBucket: "rest-38bcd.appspot.com",
//     messagingSenderId: "1030494943874",
//     appId: "1:1030494943874:web:6fe3f77ae625f97b78929b",
//     measurementId: "G-TVPGFY3WPP"
// };

// // Inicializar Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// export default db;