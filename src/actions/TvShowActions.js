import * as request from "superagent"; // Using superagent library to fetch data, which gives you back a Promise,
// on to which you attach a resolve handler with .then(callback).

//dispatching action for getting tv show detail
const showFetched = show => ({
  type: SHOW_FETCHED,
  payload: show
});

// request to api for getting particular tv show and its details
export const loadShow = name => dispatch => {
  request(`http://api.tvmaze.com/singlesearch/shows?q=${name}`)
    .then(response => {
      dispatch(showFetched(response.body));
    })
    .catch(console.error);
};

//dispatching an action for getting particular tvshow episode lists
const episodesFetched = episodes => {
  return {
    type: EPISODES_FETCHED,
    payload: episodes
  };
};
// request to api for getting particular tvshow episode lists and its details
export const loadEpisodes = showId => dispatch => {
  request(`http://api.tvmaze.com/shows/${showId}/episodes`)
    .then(response => {
      dispatch(episodesFetched(response.body));
    })
    .catch(console.error);
};
//Dispatching an action for getting a single episode based on its id
const episodeFetched = episodeId => {
  //console.log("id", episodeId)
  return {
    type: EPISODE_FETCHED,
    episodeId
  };
};

export const loadEpisode = episodeId => (dispatch, getState) => {
  return dispatch(episodeFetched(episodeId));
};

// exporting all the dispatched actions.
export const SHOW_FETCHED = "SHOW_FETCHED";
export const EPISODES_FETCHED = "EPISODES_FETCHED";
export const EPISODE_FETCHED = "EPISODE_FETCHED";
