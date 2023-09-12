const firebaseConfig = {
  apiKey: "AIzaSyDmDTjCVd0Lp2N-AN0Tr19876m5rbrz_88",
  authDomain: "ecommerce-demo-306cc.firebaseapp.com",
  projectId: "ecommerce-demo-306cc",
  storageBucket: "ecommerce-demo-306cc.appspot.com",
  messagingSenderId: "1037755442911",
  appId: "1:1037755442911:web:087d9d00aa75053f16ab6a"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.requestPermission()
  .then(function () {
    console.log("Notification permission granted.");
    return messaging.getToken();
  })
  .then(function (token) {
    console.log("FCM token:", token);
    // Send this token to your server for future use.
  })
  .catch(function (err) {
    console.error("Error getting permission:", err);
  });
