import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import { UserType } from '../types/UserType'

var firebaseConfig = {
    apiKey: "AIzaSyAF9A1c_7HxxHg__vB6J6p4z8YXQwun4tA",
    authDomain: "deploy-app-7110f.firebaseapp.com",
    databaseURL: "https://deploy-app-7110f.firebaseio.com",
    projectId: "deploy-app-7110f",
    storageBucket: "deploy-app-7110f.appspot.com",
    messagingSenderId: "160840505107",
    appId: "1:160840505107:web:862a2a1172909baf7aece6",
    measurementId: "G-LTLHS59W1Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
const db = firebase.firestore();
// const storage = firebase.storage();

export const fileUpload = () => {

}



export const readData = async () => {
    const userArray: UserType[] = []
    await db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            userArray.push((doc.data() as UserType))
        });
    });
    return userArray
}

export const addData = async (name: string, message: string, age: number) => {
    await db.collection("users").doc(`${name}_${age}`).set({
        id: name,
        name,
        message,
        age
    }).then(() => {
        console.log('finish written!!')
    }).catch(err => {
        console.log(err)
    })
}

export const addSample = async () => {
    await db.collection('cities').doc("3").set({
        name: "Los Angeles",
        state: "CAABC",
        country: "USA"
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    // Add a new document in collection "cities"
    await db.collection("cities").doc("cities").set({
        name: "Los Angeles",
        state: "CAABC",
        country: "USA"
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}