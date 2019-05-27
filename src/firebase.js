import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    // Your firebase config here...
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
