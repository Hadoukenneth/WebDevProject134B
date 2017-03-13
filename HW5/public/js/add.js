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
  var userref = db.ref('users');

  Vue.use(VueFire);

  var vm = new Vue({
      el: "#createWatchlist",
      data: {
        name: "",
        genre: ""
      },
      firebase: {
        watchlists: ref,
        users: userref
      },
      methods: {
        addWatchlist: function () {
          var user = firebase.auth().currentUser;
          var userid = user.uid;

            if (this.name.trim() && this.genre.trim()) {
                var newWatchlistKey = ref.push({
                    "name": this.name,
                    "genre": this.genre,
                    "movies": 0,
                    "userID": userid
                }).key;
                var updates = {};
                updates[userid + '/movies/'] = newWatchlistKey;
                userref.update(updates);
                this.name = ""
                this.genre = ""
            }
        },
        removeWatchlist: function (key) {
         ref.child(key).remove();
        },
        updateWatchlist: function(key, id) {
           console.log('hello');
           var title = $('#' + id + ' #newTitle').val();
           if(title != ""){
             ref.child(key).update({"name": title})
             $('#' + id + ' #newTitle').css({'display': 'none'});
             $('#' + id + ' #submitNewTitle').css({'display': 'none'});
           }else{
             alert('Name of Watchlist cannot be empty!');
           }
        },
        showForm: function (id) {
          console.log('id',id);
          $('#' + id + ' #newTitle').css({'display': 'block'});
          $('#' + id + ' #submitNewTitle').css({'display': 'block'});
          $('#' + id + ' #newTitle').val("")
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
