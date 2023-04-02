
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA36C03342vX3E7-Vz6CQMWqLATaHgTl4Q",
  authDomain: "tiktok---jornada-8fbfc.firebaseapp.com",
  projectId: "tiktok---jornada-8fbfc",
  storageBucket: "tiktok---jornada-8fbfc.appspot.com",
  messagingSenderId: "425375483211",
  appId: "1:425375483211:web:bea40ee2b687d44dde14ce"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;