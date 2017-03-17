# CSE134B Homework 5

## MovieDex Application
To view the Final Report, please see:
> CSE134BFinalReport.pdf

## Application Description
MovieDex is a simple web application that aids movie-loving individuals collect and share their
favorite movies.

### Watchlist Creating  
Users are able to create a personal watchlist, a collections of movies, by providing a customizable
title and genre of their new watchlist. From there, the application automatically calculates generates a
watchlist into the user's profile page, allowing easy access.

### Watchlist Editing
Users are able to edit and delete watchlists from their profile page with the same algorithm
provided in Watchlist Creating.

### Watchlist Updating
Users are able to change the name of their watchlist by submitting a new title to replace the original.

### Movie Adding
Users are able to add their favorite movies to their watchlists, by selecting from a set of
pre-stored movies. From there, the application will automatically store and display the associated movies
poster into their watchlist.

### User Authentication
Users are able to log in/sign up and authenticate with their email and password. If they find it more convenient, users can also log in and authenticate with Google.

## Application Use

### Setup
Access the application directly online at:
> https://moviedex-99d1a.firebaseapp.com/

#### Navigation
Starts with index.html as the login/signup page. All pages function as such:

* index.html - Login/signup page with Google Authentication.
* explore.html - Home page with an 'explore' search bar and popular movies.
* profile.html - User's profile page, which stores their watchlists and recommended movies.
* team.html - Learn more about the friendly engineers behind this application.

## Developer Tools

### Firebase
> https://www.firebase.com/

We used Firebase as our backend data storage in our application to perform CRUD operations and provide user authentication. Here is how we used Firebase:

* Allows user management
* Performs major CRUD operations:
* CREATE is executed:
* Creating a new user account when signing in with Google if that user was never logged in before.
* Create a new watchlist that appears in the user's profile.
* READ is executed:
* Read the list of watchlists in the user's profile.
* Read the list of movies associated with a watchlist.
* UPDATE is executed:
* Update a watchlist's name if the user decides to change its name.
* DELETE is executed on following features:
* Delete an entire watchlist from the user's profile.

### Bootstrap TODO
> http://getbootstrap.com/


### jQuery TODO
> https://jquery.com/

jQuery was utilized for some quicker targeting and access to some shortcut methods just to simplify the lives of the developers. While we initially started out in pure javascript with writing our own functions, we found that the tradeoff to the extra file space was worth some ease of coding at this scale.

## Validation TODO


## Known Issues

### Firebase performance
The loading time for Firebase data is significantly slow at certain times. In order to improve this, caching or cookies can be helpful for potential use in the future.

### Movie Adding
Adding a movie to a specific watchlist will add the movie to every watchlist that the user owns. This is due to the fact that opening a Bootstrap modal does not grab the correct key associated to the user's watchlist. This is something we hope to fix in the near future.

### Not Fully Implemented - Future Goals
* Provide fully implemented searching functionality on the Explore page.
* Broaden the list of movies to collect and share.
* Allow users to add movies to their recommendation lists.

## Thank You!
We hope you enjoyed using MovieDex, the simple web application for saving and sharing your favorite movies. Feel free to contact us with any feedback, comments, suggestions, or concerns.
