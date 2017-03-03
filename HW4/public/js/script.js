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

  var emailTxt = document.getElementById('email');
  var passwordTxt = document.getElementById('password');
  var btnLogin = document.getElementById('loginBtn');
  var btnSignup = document.getElementById('createAcc');

  btnLogin.addEventListener('click', function(){
    var email = emailTxt.value;
    var password = passwordTxt.value;
    var auth = firebase.auth();

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      window.location = '/explore.html';
    },
    function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
    });
  });

  btnSignup.addEventListener('click', function(){
    var email = emailTxt.value;
    var password = passwordTxt.value;
    var auth = firebase.auth();

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      window.location = '/explore.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('Password should contain at least 6 characters in length and contain, numbers, upper case letters, and lower case letters.');
      } else {
        alert(errorMessage);
      }
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
