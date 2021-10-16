import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhKeXWafv5VVZgKyq66GGG7Wx-LdC_yvw",
  authDomain: "fullstack-4cc8b.firebaseapp.com",
  projectId: "fullstack-4cc8b",
  storageBucket: "fullstack-4cc8b.appspot.com",
  messagingSenderId: "925829701848",
  appId: "1:925829701848:web:82ef4bf6233a605473b7ad"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true ,merge:true});
export const auth = app.auth();
export const firestore = app.firestore();

export default firebaseConfig;