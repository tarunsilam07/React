import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAPP_vIhfvZKs1_si-hebqD7n-Ve0ndwRQ",
  authDomain: "my-app-2efae.firebaseapp.com",
  projectId: "my-app-2efae",
  storageBucket: "my-app-2efae.firebasestorage.app",
  messagingSenderId: "85044809240",
  appId: "1:85044809240:web:ce5524a3bda754957abd6d",
  databaseURL:"https://my-app-2efae-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export default app;