(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuaRPCoQegFXgMeIXR2ZSaXaDWu3KukPo",
    authDomain: "moviedex-99d1a.firebaseapp.com",
    databaseURL: "https://moviedex-99d1a.firebaseio.com",
    storageBucket: "moviedex-99d1a.appspot.com",
    messagingSenderId: "820891509335"
  };
  var app = firebase.initializeApp(config);
  var db = app.database()
  var ref = db.ref('watchlists');

  Vue.use(VueFire);

  var vm = new Vue({
      el: "#createWatchlist",
      data: {
        name: "",
        theme: ""
      },
      firebase: {
        movielists: ref
      },
      methods: {
        addWatchlist: function () {
            if (this.name.trim() && this.theme.trim()) {
                ref.push({
                    "name": this.name,
                    "theme": this.theme

                })
                this.name = ""
                this.theme = ""
            }
        }
      }
    });
}());
