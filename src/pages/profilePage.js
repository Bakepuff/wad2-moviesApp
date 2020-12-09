import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'
import {Tabs} from 'antd';
import AddReviewButton from '../components/buttons/addReview'
import 'antd/dist/antd.css'
import ProfileInfo from "../components/profileInfo";
import {Link} from "react-router-dom";

const ProfilePage = props => {
  const context = useContext(MoviesContext);
  const user = context.user

  const favorites = context.movies.filter(m => m.favorite)
  const watchlists = context.upcoming.filter( m => m.watchlist )
  
  if (!user) {
    return <Link to={'/login'}>login</Link>
  }

  return (
    <>
      <Tabs defaultActiveKey={'Favorite'} tabBarExtraContent={{
        left: <ProfileInfo user={user}/>
      }}>
        <Tabs.TabPane key={'Favorite'} tab={'Favorite Movies'}>
          <MovieListPageTemplate
            movies={favorites}
            title={"Favorite Movies"}
            action={movie => <AddReviewButton movie={movie}/>}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key={'Watchlist'} tab={'Watchlist Movies'}>
          <MovieListPageTemplate
            movies={watchlists}
            title={"Watchlist Movies"}
            action={movie => <AddReviewButton movie={movie}/>}
          />
        </Tabs.TabPane>
      </Tabs>

    </>
  );
};

export default ProfilePage;
