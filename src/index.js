import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";

const HomePage = lazy(() =>import( "./pages/homePage"));
const UpcomingMoviePage  = lazy(() =>import( "./pages/upcomingMoviePage"));
const LoginPage  = lazy(() =>import( './pages/loginPage'))
const MoviePage  = lazy(() =>import( './pages/movieDetailsPage'))
const FavoriteMoviesPage  = lazy(() =>import( './pages/favoritesMoviesPage'))// NEW
const WatchlistPage  = lazy(() =>import( './pages/WatchlistPage'  ))
const MovieReviewPage  = lazy(() =>import( "./pages/movieReviewPage"));
const SiteHeader  = lazy(() =>import( './components/siteHeader'))
const AddMovieReviewPage  = lazy(() =>import( './pages/addMovieReviewPage'))
const Top_ratedMoviePage  = lazy(() =>import( "./pages/Top_ratedMoviePage"));
const ProfilePage  = lazy(() =>import( "./pages/profilePage"));
const CreditPage  = lazy(() =>import( './pages/creditPage'))


const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>    {/* NEW */}
              <Switch>   
          <Route path="/login" component={LoginPage}/>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route path="/movies/top_rated" component={Top_ratedMoviePage} />
          <Route path="/movies/profile" component={ProfilePage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/upcoming/watchlist" component={WatchlistPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/credit/:id" component={CreditPage}/>
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
            </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Suspense fallback={<h3>Loading...</h3>}>
<App />
</Suspense>, 
document.getElementById("root"));
