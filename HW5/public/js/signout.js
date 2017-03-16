(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuaRPCoQegFXgMeIXR2ZSaXaDWu3KukPo",
    authDomain: "moviedex-99d1a.firebaseapp.com",
    databaseURL: "https://moviedex-99d1a.firebaseio.com",
    storageBucket: "moviedex-99d1a.appspot.com",
    messagingSenderId: "820891509335"
  };
  firebase.initializeApp(config);

  var btnLogout = document.getElementById('signout');

  btnLogout.addEventListener('click', function(){
    firebase.auth().signOut().then(function() {
      console.log('log out');
      window.location = '/';
    }, function(error) {
      console.log('error');
    });
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('signedin');
    } else {
      console.log('not signedin');
    }
  });
}());
