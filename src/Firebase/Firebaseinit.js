import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config.firebase";

const initializefirebase = () => {
  initializeApp(firebaseConfig);
};

initializefirebase();

// export default initializefirebase;
