(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuaRPCoQegFXgMeIXR2ZSaXaDWu3KukPo",
    authDomain: "moviedex-99d1a.firebaseapp.com",
    databaseURL: "https://moviedex-99d1a.firebaseio.com",
    storageBucket: "moviedex-99d1a.appspot.com",
    messagingSenderId: "820891509335"
  };
  // firebase.initializeApp(config);
  var app = firebase.initializeApp(config);
  var db = app.database();
  var ref = db.ref('users');


  var provider = new firebase.auth.GoogleAuthProvider();

  var emailTxt = document.getElementById('email');
  var passwordTxt = document.getElementById('password');
  var btnLogin = document.getElementById('loginBtn');
  var btnSignup = document.getElementById('createAcc');
  var googleLogin = document.getElementById('googleLogin');

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

  googleLogin.addEventListener('click', function(){
    // Using a redirect.
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
      }
      var user = result.user;
    });

    // Start a sign in process for an unauthenticated user.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  });

  btnSignup.addEventListener('click', function(){
    var email = emailTxt.value;
    var password = passwordTxt.value;
    var auth = firebase.auth();

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      var user = firebase.auth().currentUser;
      var token = user.getToken();

      console.log(token);
      
      db.ref('users/' + user.uid).set({
          "name": user.uid,
          "email": user.email,
          "movies": "",
      });
      // window.location = '/explore.html';
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
    if (user && window.location != '/') {
      console.log('signedin');
      // window.location = '/explore.html'

    } else {
      console.log('not signedin');
    }
  });


}());
