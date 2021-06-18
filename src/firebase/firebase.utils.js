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

export const createUserProfileDocument = async (userAuth, additionalData)=>{
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if (!snapShot.exists){
                const {displayName, email} = userAuth;
                const createdAt = new Date();

                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })

                }catch(error){
                        console.log('Error creating user', error.message)
                }
        }

        return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
