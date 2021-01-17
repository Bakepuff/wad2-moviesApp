export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getMovie = id => {
  return fetch(
    `/api/movie/${id}`, {headers: {
        'Content-Type': 'application/json'
    },
    method: 'get',
    }).then(res => res.json())
};

  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(`/api/movie/${id}/reviews`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get',
      
  }).then(res => res.json())
  };
  
  export const getUpcomingMovie = () => {
  return fetch(
     '/api/Upcoming',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

  export const getTop_ratedMovie = () => {
    return fetch(
      '/api/toprated',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json());
 };

export const getMovieCredits = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(json => json.cast);
};

export const getCreditDetail = (creditId) => {
  return fetch(
    `https://api.themoviedb.org/3/credit/${creditId}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
};

export const getSimilarMovies = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results || [])
};

export const newToken = () => {
  return fetch(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.request_token)
};

export const newSession = (token) => {
  return fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        request_token: token
      })
    })
    .then(res => res.json())
    .then(json => json.session_id)
};

export const getAccountDetails = (sessionId) => {
  return fetch(
    `https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}`
  )
    .then(res => res.json())
};

export const login = (username, password) => {
  return newToken().then(token => {
    return fetch(
      `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_TMDB_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username, password, request_token: token
        })
      })
  }).then(res => res.json())
};

export const rateMovie = (movieId, value, sessionId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}`
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value
      })
    }).then(res => res.json())
};