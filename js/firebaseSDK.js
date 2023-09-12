import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmDTjCVd0Lp2N-AN0Tr19876m5rbrz_88",
  authDomain: "ecommerce-demo-306cc.firebaseapp.com",
  projectId: "ecommerce-demo-306cc",
  storageBucket: "ecommerce-demo-306cc.appspot.com",
  messagingSenderId: "1037755442911",
  appId: "1:1037755442911:web:087d9d00aa75053f16ab6a"
};

firebase.initializeApp(firebaseConfig);

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');

    // Generate a new set of VAPID keys
webpush.generateVAPIDKeys().then(keys => {
  console.log("Public Key:", keys.publicKey);
  console.log("Private Key:", keys.privateKey);
}).catch(error => {
  console.error("Error generating VAPID keys:", error);
});

const vapidKey = keys.publicKey;

messaging.usePublicVapidKey(vapidKey);

