import * as firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../../../config/google/firebaseConfig";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore().collection('databases').doc('db_music');
export default db;
