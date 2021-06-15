import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';


const config ={
    
        apiKey: "AIzaSyCdBMB7en3-AEjjFF63wKDOI11QSUCCHsc",
        authDomain: "adex-2baf8.firebaseapp.com",
        projectId: "adex-2baf8",
        storageBucket: "adex-2baf8.appspot.com",
        messagingSenderId: "392525421641",
        appId: "1:392525421641:web:9f710bec4bba2073f57398"
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
