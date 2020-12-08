import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'
import {Tabs} from 'antd';
import AddReviewButton from '../components/buttons/addReview'
import 'antd/dist/antd.css'


const ProfilePage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter(m => m.favorite)
  const watchlists = context.upcoming.filter( m => m.watchlist )
  
  return (
    <>
      <Tabs defaultActiveKey={'Favorite'} 
      >
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
