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

  var btnLogout = document.getElementById('logoutBtn');

  btnLogout.addEventListener('click', function(){
    console.log('log out');
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('signedin');
  } else {
    console.log('not signedin');
  }
});


}());
