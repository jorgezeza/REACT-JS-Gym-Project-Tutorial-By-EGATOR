import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCnyjdqGhf5avJ8OmJ1sq-Q_3RcqgbiM58",
  authDomain: "egator-gym.firebaseapp.com",
  projectId: "egator-gym",
  storageBucket: "egator-gym.appspot.com",
  messagingSenderId: "990835551570",
  appId: "1:990835551570:web:d3f3e100df679968001e8b"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
