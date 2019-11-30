import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB5ykUX8QCImRVQuLQ0ZnZ1S0_k2hATasE",
    authDomain: "tela-de-chamado.firebaseapp.com",
    databaseURL: "https://tela-de-chamado.firebaseio.com",
    projectId: "tela-de-chamado",
    storageBucket: "tela-de-chamado.appspot.com",
    messagingSenderId: "1044057877271",
    appId: "1:1044057877271:web:a6855f4ea9fc44c3a22552"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
