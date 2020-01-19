import { combineReducers } from "redux";
import TvShow from "./TvShow";
import TvShowEpisode from "./TvShowEpisode";
//combining all the reducers and exporting it .
export default combineReducers({
  // reducers will go here
  TvShow,
  TvShowEpisode
});
