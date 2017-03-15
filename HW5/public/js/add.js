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
  var moviesref = db.ref('watchlists');
  var userref = db.ref('users');
  var userswatchlistsref = db.ref('userswatchlists');
  var currentuserref = db.ref('currentUser');

  var currentuser = userref.orderByChild('id');
  var usersmovies = moviesref.orderByChild('user');

  Vue.use(VueFire);

  var vm = new Vue({
      el: "#createWatchlist",
      data: {
        name: "",
        genre: ""
      },
      firebase: {
        watchlists: moviesref,
        users: userref,
        userswatchlists: userswatchlistsref,
        currentuser: currentuserref
      },
      methods: {
        displayCurrentUser: function(){
          var user = firebase.auth().currentUser;
          var userid = user.uid;
          currentuser.equalTo(userid).once('value', function(snapshot){
            console.log('value', snapshot.val());
            currentuserref.set(snapshot.val());
          });
        },
        orderUsersMovies: function(){
          console.log('hello');
          var user = firebase.auth().currentUser;
          var userid = user.uid;
          usersmovies.equalTo(userid).once('value', function(snapshot){
            userswatchlistsref.set(snapshot.val());
          });
        },
        addWatchlist: function () {
          var user = firebase.auth().currentUser;
          var userid = user.uid;

            if (this.name.trim() && this.genre.trim()) {
                var newWatchlistKey = moviesref.push({
                    "name": this.name,
                    "genre": this.genre,
                    "movies": 0,
                    "user": userid
                }).key;

                var updates = {};
                updates['/movies/' + newWatchlistKey] = true;
                db.ref('users/' + userid).update(updates);
                this.name = ""
                this.genre = ""

                usersmovies.equalTo(userid).once('value', function(snapshot){
                userswatchlistsref.set(snapshot.val());
          });
            }
        },
        removeWatchlist: function (key) {
         userswatchlistsref.child(key).remove();
         moviesref.child(key).remove();
        },
        updateWatchlist: function(key, id) {
           console.log('hello');
           var title = $('#' + id + ' #newTitle').val();
           if(title != ""){
             userswatchlistsref.child(key).update({"name": title});
             moviesref.child(key).update({"name": title});
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
      vm.orderUsersMovies();
      vm.displayCurrentUser();
      console.log('signedin');
    } else {
      console.log('not signedin');
    }
  });


}());
