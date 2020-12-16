# Assignment 1 - ReactJS app.

Name: TanShi

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 

 + Feature 1 -  watchlist: Users can add movies to the watchlist from the upcoming movies page by 'add to watchlist' button.
 + Feature 2 -  toprated movie page: Users can get toprated movies in TMDB and view their detailed information
 + Feature 3 -  login: Users can log in with their TMDB username and password. After logging in, they can rate movies, add favorites, add watch list and view personal page operations
 + Feature 4 -  profile page: The personal page displays the user’s favorites and watchedlist, as well as the user’s username in TMDB
 + Feature 5 -  Casts: The moviedetail pages will show the cast and crew of the movie, click into it, and there will be information about the actor in the movie, and he the famous movies has participated in.
 + Feature 6 -  Similar movies: The moviedetail page will display similar movies of the movie. When you click on a similar movie, the detailed movie page will be updated with the information of that movie, and the casts and similar movie modules will be changed accordingly.
 + Feature 7 -  rate: You can rate the movie on the detailed page when you are logged in. A message will be displayed when the rating is successful, and the Rating will be uploaded to TMDB.
 + Feature 8 -  Before adding favorites, adding to watchlists and rating movies , it will check whether you are logged in. If it is not logged in, it will go to the login interface.

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........
 + Install the React UI library Antd and import components, such as message, rate, and tag. and import stylesheets manually

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/top_rated - get the top rated movies on TMDb.
+ https://api.themoviedb.org/3/movie/${movieId}/credits - get the cast and crew for a movie.
+ https://api.themoviedb.org/3/credit/${creditId} - get a movie or TV credit details by id.
+ https://api.themoviedb.org/3/movie/${movieId}/similar - get a list of similar movies
+ https://api.themoviedb.org/3/authentication/token/new - create a temporary request token that can be used to validate a TMDb user login.
+ https://api.themoviedb.org/3/authentication/session/new - this method will let you create a new guest session. 
+ https://api.themoviedb.org/3/account - get your account details.
+ https://api.themoviedb.org/3/authentication/token/validate_with_login - this method allows an application to validate a request token by entering a username and password.
+ https://api.themoviedb.org/3/movie/${movieId}/rating - rate a movie.


## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][components]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie, including movie introduction, casts,similar movies and rate section. Clicking the 'Show Reviews' button will display extracts from critic reviews. Click the rated star to rate the movie, and there will be a message when the rateing is successful. Click the cast to get the detailed page of the cast. Clicking on a similar movie will go to the detailed page of that movie. 
 
![][login]
>Shows the login interface.

![][profile]
>show the user's name and favorites, the watchlist. 

![][cast]
>Shows the information of an actor. 

![][Toprated]
>a list of top-rated movies. click on the Detail button will diaplay the information of the movie

![][Upcoming]
>a list of upcoming movies. click on the Add to watchlist, it will determine whether you are logged in, if you are logged in, the movie will be added to the watchlist, if not logged in, it will switch to the login page.

![][Homepage]
>a list of movies. click on the Add to favorites, it will determine whether you are logged in, if you are logged in, the movie will be added to the favorites, if not logged in, it will switch to the login page.




## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.



+ /movies/top_rated (public) - displays top-rated movies.
+ /movies/:id (public) - displays details information of movies.
+ /credit/:id (public) - displays information of credits.
+ /login (private) - displays the login function.
+ /movies/profile(protected) - displays the profile of the user.
+ /movies/favorites(protected) - displays the movies added to favorites by user.
+ /upcoming/watchlist(protected) - displays the movies added to watchlist by user.



### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][castsLink]
> Clicking a cast will display that cast's details.

![][SimilarmoviesLink]
> Clicking a similar movie will display that movie's detail information.

![][FavoritemoviesLink]
> Clicking the favorite movies will display that user's favorite movies.

![][WatchlistLink]
> Clicking the watchlist will display that user's watchlist.

![][DetailLink]
> Clicking the detail will display that movies details.

![][LoginLink]
> Clicking the login will lead to login page.

![][rate]
> Clicking the star will rate the movie and get a message.




## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).
+ https://ant.design/ - Ant Design React UI framework.
+ https://blog.csdn.net/deft_mkjing/article/details/53762277 - session and token
+ https://stackoverflow.com/questions/45372791/how-to-perfrom-webapi-post-call-from-react-js - web api POST

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: TanShi

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,
 
+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.There are casts section and similar movie section below.

Tests: cypress/integration/movieDetails.spec.js 

![][movieDetail]


+ Home page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/home-page.spec.js 

![][Homepage]

+ Login page - Users can log in with their TMDB username and password. After logging in, they can rate movies, add favorites, add watch list and view personal page operations

Tests: cypress/integration/login-page.spec.js

![][login]

+ Top rated movie page - Users can get toprated movies in TMDB and view their detailed information.

Tests: cypress/integration/topRated-page.spec.js 

![][Toprated]

+ Profile page - The personal page displays the user’s favorites and watchedlist, as well as the user’s favorites and watchlist.

Tests: cypress/integration/profile-page.spec.js

![][profile]


## Testing.

Cypress Dashboard URL:  https://dashboard.cypress.io/projects/u4oi39/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D 

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.
cypress/integration/login.spec.js - test when the account or the password is wrong.


## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

+ Layout Inspector-https://www.npmjs.com/package/cypress-layout-inspector.
+ Bunding and code-splitting
---------------------------------

[movieDetail]: ./public/movieDetail.png
[cast]: ./public/cast.png
[Homepage]: ./public/Homepage.png
[login]: ./public/login.png
[profile]: ./public/profile.png
[Toprated]: ./public/Toprated.png
[Upcoming]: ./public/Upcoming.png
[reviewLink]: ./public/reviewLink.png
[castsLink]: ./public/castLink.png
[DetailLink]: ./public/DetailLink.png
[SimilarMoviesLink]: ./public/similarLink.png
[FavoriteMoviesLink]: ./public/favoriteLink.png
[WatchlistLink]: ./public/watchlistLink.png
[LoginLink]: ./public/loginLink.png
[components]: ./public/components.png
[rate]:./public/rate.png