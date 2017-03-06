(function(){
  var config = {
    apiKey: "AIzaSyCuaRPCoQegFXgMeIXR2ZSaXaDWu3KukPo",
    authDomain: "moviedex-99d1a.firebaseapp.com",
    databaseURL: "https://moviedex-99d1a.firebaseio.com",
    storageBucket: "moviedex-99d1a.appspot.com",
    messagingSenderId: "820891509335"
  };
  var app = firebase.initializeApp(config);
  var db = app.database();
  var ref = db.ref('watchlists');

  Vue.use(VueFire);

  var vm = new Vue({
      el: "#createWatchlist",
      data: {
        name: "",
        theme: ""
      },
      firebase: {
        watchlists: ref
      },
      methods: {
        addWatchlist: function () {
            if (this.name.trim() && this.theme.trim()) {
                ref.push({
                    "name": this.name,
                    "theme": this.theme,
                    "movies": 0,
                })
                this.name = ""
                this.theme = ""
            }
        },
        removeWatchlist: function (key) {
         ref.child(key).remove();
        },
        updateWatchlist: function(key) {
           console.log('hello');
           var title = $('#newTitle').val();
           if(title != ""){
             ref.child(key).update({"name": title})
             $('#newTitle').css({'display': 'none'});
             $('#submitNewTitle').css({'display': 'none'});
           }else{
             alert('Name of Watchlist cannot be empty!');
           }
        },
        showForm: function () {
          $('#newTitle').css({'display': 'block'});
          $('#submitNewTitle').css({'display': 'block'});
          $('#newTitle').val("")

        }
      }
    });

    var btnLogout = document.getElementById('signout');

    btnLogout.addEventListener('click', function(){
      // firebase.auth().signOut();
      firebase.auth().signOut().then(function() {
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
