import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"

import { 
  getFirestore,
  collection, 
  addDoc, 
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

/////////////////////////////////////////////////////////////////////////
const firebaseConfig = {
    apiKey: "AIzaSyDqMwd_xErUiK49nDOprUvmMosTOKzSZ4s",
    authDomain: "pagina-38a9f.firebaseapp.com",
    databaseURL: "https://pagina-38a9f-default-rtdb.firebaseio.com",
    projectId: "pagina-38a9f",
    storageBucket: "pagina-38a9f.appspot.com",
    messagingSenderId: "123429604846",
    appId: "1:123429604846:web:1d9f18d3ed48c54de7d2ff",
    measurementId: "G-WZEEQDP13G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//gestiona la autenticacion del usuario
const auth = getAuth();
const db = getFirestore(app);

export const loginvalidation=(email,password)=>signInWithEmailAndPassword(auth, email, password);

export const Usercreate=(email, password)=>createUserWithEmailAndPassword(auth, email, password)



export const adduser=(id,Nombre,telefono,email)=>
  setDoc(doc(db, "Pedidos", id), {
    id,
    Nombre,
    telefono,
    email
  });
  
export const updateuser=(id,Nombre,telefono,email)=>
  updateDoc(doc(db, "Pedidos", id), {
    id,
    Nombre,
    telefono,
    email
  });
  
export const readuser=(id)=>
  getDoc(doc(db, "Pedidos", id));

  export const addcollection1=(imgpago, Referencia,Nombre,telefono,email)=>
  addDoc(collection(db, "Productos"),{
    imgpago,
    Referencia,
    Nombre,
    telefono,
    email
});



export const getcollections1=()=>
  getDocs(collection(db, "Productos"));