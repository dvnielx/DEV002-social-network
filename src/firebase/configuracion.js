// Importa la biblioteca de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword} from  'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAAHfvbH9LChUrOwAbR4cydwCsmHa7Q330',
  authDomain: 'usuarias-journey-mates.firebaseapp.com',
  projectId: 'usuarias-journey-mates',
  storageBucket: 'usuarias-journey-mates.appspot.com',
  messagingSenderId: '15257223280',
  appId: '1:15257223280:web:eecc0cb646124a2f42b4b5',
  measurementId: 'G-4W8ETMYH7S',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Crea una función para registrar usuarios
export function registerUser(email, password) {
  
  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    console.log('Usuario registrado correctamente');
  })
  .catch((error) => {
    console.error(error.code);
    if (error.code === 'auth/email-already-in-use'){
          alert('Este correo ya está registrado')
      }else if (error.code === 'auth/weak-password'){
          alert('Tu contraseña no es segura')
      }else if (error.code === 'auth/invalid-email'){
          alert('Este correo no existe o es inválido')
      }else if(error.code === 'auth/internal-error'){
        alert('Completa todos los campos')
      }
      
  });
  
}

// export function registerUser(email, password) {
//   const pais = document.getElementById('paises').value;
//   const edad = document.getElementById('edad').value;
//   if(pais === "" || edad === "") {
//     alert("Por favor, completa todos los campos");
//   } else {
//     createUserWithEmailAndPassword(auth, email, password)
//     .then(() => {
//       console.log('Usuario registrado correctamente');
//     })
//     .catch((error) => {
//       console.error(error.code);
//       if (error.code === 'auth/email-already-in-use'){
//         alert('Este correo ya está registrado')
//       }else if (error.code === 'auth/weak-password'){
//         alert('Tu contraseña no es segura')
//       }else if (error.code === 'auth/invalid-email'){
//         alert('Este correo no existe o es inválido')
//       }else if(error.code === 'auth/internal-error'){
//         alert('Completa todos los campos')
//       }
//     });
//   }
// }

export function iniciarSesionUsuario (email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("signed in")
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  };

// export const authGoogle = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
