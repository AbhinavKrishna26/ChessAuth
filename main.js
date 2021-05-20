var mainApp = {};
(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            uid = user.uid;
          // User is signed in.
        }else{
            window.location.replace("login.html");
            uid = null;
        }
      });

      function logOut(){
          firebase.auth().signOut();
          window.open('home.html','_self',false)
      }

      mainApp.logOut = logOut;
})()