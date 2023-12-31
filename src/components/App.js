import React from "react";

import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import { data } from "../data";
import { addMovies, setShowFav } from "../actions";
import { StoreContext } from "..";//ok

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;//ok
    //api call
    //dispatch function
    store.subscribe(() => {
      this.forceUpdate();//subscribe would be called after state change in store and then we have to update UI
    });//therefore using forceUpdate() to update the UI
    store.dispatch(addMovies(data));//initial movies kuch to be showcased from data.js on site
    //all movies ek saath jaari
  }//ok
  isMovieFav = (movie) => {
    const { movies } = this.props.store.getState();
    return movies.favourites.indexOf(movie) > -1;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFav(val));
  };
  render() {
    const { movies, search } = this.props.store.getState();
    const { list, favourites, showFav } = movies;
    //console.log("RENDER", this.props.store.getState());
    const displayMovie = showFav ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="heading">Movie Mania</div>
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFav ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFav ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
            {/* ok */}
          </div>
          <div className="list">
            {displayMovie.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFav(movie)}
              />
            ))}
          </div>
          {displayMovie.length === 0 ? (
            <div className="no-movies">No movies to display!! </div>
          ) : null}
        </div>
      </div>
    );
  }
}//ok

class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
        {/* store coming from  val in provider */}
      </StoreContext.Consumer>
    );
  }
}//ok

export default AppWrapper;
//ok
//ok