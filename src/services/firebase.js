import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZVGNDgINo6ahX1saRnxlO3LHwi4b2YAI",
  authDomain: "react-bts-b7939.firebaseapp.com",
  projectId: "react-bts-b7939",
  storageBucket: "react-bts-b7939.appspot.com",
  messagingSenderId: "951169781393",
  appId: "1:951169781393:web:ea688f6ee78f483df27930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);