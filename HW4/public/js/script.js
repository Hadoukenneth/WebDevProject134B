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
  var btnLogout = document.getElementById('logoutBtn');


  btnLogin.addEventListener('click', function(){
    alert('hello');
    var email = emailTxt.value;
    var password = passwordTxt.value;
    var auth = firebase.auth();

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  });

  btnSignup.addEventListener('click', function(){
    var email = emailTxt.value;
    var password = passwordTxt.value;
    var auth = firebase.auth();

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      console.log('here');
      alert(errorMessage);
    }
    console.log(error);
    });
  });

  btnLogout.addEventListener('click', function(){
    console.log('log out');
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(function(firebaseUser){
    if(firebaseUser){
      console.log(firebaseUser);
      btnLogout.setAttribute('display', 'block');
    }else{
      console.log('Not signed in');
      btnLogout.setAttribute('display', 'none');
    }
  });

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('signedin');
  } else {
    console.log('not signedin');
  }
});


}());
