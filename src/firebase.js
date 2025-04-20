import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 
  "AIzaSyAd8XpFgqsAONKW64k38gh-9bdNt3Prj8A",
  authDomain: "bharatgo-906ee.firebaseapp.com",
  projectId: "bharatgo-906ee"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);