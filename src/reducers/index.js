import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FROM_FAV,
  SHOW_FAV,
  ADD_SEARCH_RESULT,
  ADD_MOVIE_TO_LIST,
} from "../actions";
//ok
const initialMovieState = {
  list: [],
  favourites: [],
  showFav: false,
};
export function movies(state = initialMovieState, action) {//state ke liye default value leli hai
//state ke liye default value leli hai
  switch (action.type) {
    case ADD_MOVIES://initially show krne ke liye
      return {
        ...state, //using spread operators
        list: action.movies,//ok
        //mai state ko expand krra using spread operator 
        //toh state mai already agar list hoga to vo is list se override ho jyega!!!!!!!
        //is list se replaced ho jyega 
      };
    case ADD_FAVOURITE:
      //add movies ek baar chlega to get initial list
      //yeh baar baar chlega
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],//ok
      };
    case REMOVE_FROM_FAV:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,//ok
      };
    case SHOW_FAV:
      return {
        ...state,
        showFav: action.val,//ok t or f
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],//ok
      };
    default:
      return state;//olklkkkkkkk
  }
}

const initialSeacrhState = {
  result: [],
  showSearchResults: false,
};
export function search(state = initialSeacrhState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,//ok
      };
    default:
      return state;//ok
  }
}
//dono reducers call krdiye 
// }
export default combineReducers({
  movies,
  search,
});//dono reducers call krdega like above mentioned!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ok
//okkk