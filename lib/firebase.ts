import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTa3-m7SqwxxOoTwYn9Gl959z2X3iNfsg",
  authDomain: "nextfirebase-ffe80.firebaseapp.com",
  projectId: "nextfirebase-ffe80",
  storageBucket: "nextfirebase-ffe80.appspot.com",
  messagingSenderId: "870502281704",
  appId: "1:870502281704:web:fbfe509a08f67f0e02745d",
};

function createFirebaseApp(config: object) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = "state_changed";
