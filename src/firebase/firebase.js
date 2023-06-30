import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyCHFjWqf3d5AnWEaoKVrionMNP9FbDgHjo",
  authDomain: "api-4a4c5.firebaseapp.com",
  projectId: "api-4a4c5",
  storageBucket: "api-4a4c5.appspot.com",
  messagingSenderId: "882311260257",
  appId: "1:882311260257:web:7c0495bccc659bfe04a220",
  measurementId: "G-XR279V891F"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
