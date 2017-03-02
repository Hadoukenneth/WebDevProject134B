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
    var email = emailTxt.value;
    var password = passwordTxt.value;
    var auth = firebase.auth();

    var promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(function(e){
      console.log(e.message);
    })
  });

  btnSignup.addEventListener('click', function(){
    var email = emailTxt.value;
    var password = passwordTxt.value;
    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(email,password);
    promise.catch(function(e){
      console.log(e.message);
    })
  });

  btnLogout.addEventListener('click', function(){
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


}());
