import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyApma1oyUmw38LPpOx0t1KpQ06Nfg-IGus",
    authDomain: "e-library-d2d9a.firebaseapp.com",
    databaseURL: "https://e-library-d2d9a-default-rtdb.firebaseio.com",
    projectId: "e-library-d2d9a",
    storageBucket: "e-library-d2d9a.appspot.com",
    messagingSenderId: "342955813047",
    appId: "1:342955813047:web:90b7ab664e40106db7c532"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
