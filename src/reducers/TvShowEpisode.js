import { EPISODES_FETCHED, EPISODE_FETCHED } from "../actions/TvShowActions";

//store the tv show episodes and also based on each episode clicked ,we filter the episode and get that particular episode based on its episodeid.
export default (state = [], action = {}) => {
  switch (action.type) {
    case EPISODES_FETCHED:
      return action.payload;
    case EPISODE_FETCHED:
      return [
        ...state.filter(episode => episode.id === parseInt(action.episodeId))
      ];

    default:
      return state;
  }
};
