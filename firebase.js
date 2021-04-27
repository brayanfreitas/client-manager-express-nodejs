const firebase = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyB_a3fVIRVlXv3oDPBilmfWrOCOR3gj-QE",
    authDomain: "wiwaplogin.firebaseapp.com",
    databaseURL: "https://wiwaplogin-default-rtdb.firebaseio.com",
    projectId: "wiwaplogin",
    storageBucket: "wiwaplogin.appspot.com",
    messagingSenderId: "14559100027",
    appId: "1:14559100027:web:1438598503c352501ff6de",
    measurementId: "G-29S3P674H9"
  };

  firebase.initializeApp(firebaseConfig);

  const serviceAccount = require("./serviceAccountKey.json");

  firebase.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://wiwaplogin-default-rtdb.firebaseio.com"
});

  module.exports.createUser = (email, password )=>{
      return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        return JSON.stringify(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/weak-password'){
            return {err: 'The password is too weak'}
        }else{
            return {err: errorMessage}
        }
      });
    }