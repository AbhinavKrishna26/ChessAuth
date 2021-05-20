var app_fireBase = {};
(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyCd8LPpewgOvjzGeytWbsDDmLfpErf1kwA",
    authDomain: "chess-d57b8.firebaseapp.com",
    projectId: "chess-d57b8",
    storageBucket: "chess-d57b8.appspot.com",
    messagingSenderId: "1044779357354",
    appId: "1:1044779357354:web:c96dff44df105c05edacd3",
    measurementId: "G-S9M47LK0ZS"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  app_fireBase = firebase;
})()