import { SHOW_FETCHED } from "../actions/TvShowActions";

//store the tv show details
export default (state = {}, action = {}) => {
  switch (action.type) {
    case SHOW_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
