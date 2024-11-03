import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {getDatabase,set,ref} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAPP_vIhfvZKs1_si-hebqD7n-Ve0ndwRQ",
    authDomain: "my-app-2efae.firebaseapp.com",
    databaseURL: "https://my-app-2efae-default-rtdb.firebaseio.com",
    projectId: "my-app-2efae",
    storageBucket: "my-app-2efae.firebasestorage.app",
    messagingSenderId: "85044809240",
    appId: "1:85044809240:web:1ffa52232594cd727abd6d",
    databaseURL: "https://my-app-2efae-default-rtdb.firebaseio.com/",
  };

const fireBaseApp=initializeApp(firebaseConfig);
const fireBaseAuth=getAuth(fireBaseApp);
const dataBase=getDatabase(fireBaseApp)

const FireBaseContext=createContext(null);
export const useFireBase=()=>useContext(FireBaseContext)


export const FireBaseProvider=(props)=>{

    const signupUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(fireBaseAuth,email,password);
    };

    const putData=(key,data)=>{
        return set(ref(dataBase,key),data);
    }

    return (
        <FireBaseContext.Provider value={{signupUserWithEmailAndPassword,putData}}>
            {props.children}
        </FireBaseContext.Provider>
    )
};
