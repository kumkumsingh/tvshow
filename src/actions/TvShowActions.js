// Using superagent library to fetch data, which gives you back a Promise,
// on to which you attach a resolve handler with .then(callback).

export const loadShow = (name) => ({
  apiCall: true,
  path: `/singlesearch/shows?q=${name}`,
  successType: SHOW_FETCHED
});

export const loadEpisodes = (showId) => ({
  apiCall: true,
  path: `/shows/${showId}/episodes`,
  successType: EPISODES_FETCHED
});

//Dispatching an action for getting a single episode based on its id
// const episodeFetched = episodeId => {
//   //console.log("id", episodeId)
//   return {
//     type: EPISODE_FETCHED,
//     episodeId
//   };
// };

// export const loadEpisode = episodeId => (dispatch, getState) => {
//   return dispatch(episodeFetched(episodeId));
// };
export const loadEpisode = ( episodeId ) => {
  return {
        type: EPISODE_FETCHED,
        episodeId
      };
};

// exporting all the dispatched actions.
export const SHOW_FETCHED = "SHOW_FETCHED";
export const EPISODES_FETCHED = "EPISODES_FETCHED";
export const EPISODE_FETCHED = "EPISODE_FETCHED";
