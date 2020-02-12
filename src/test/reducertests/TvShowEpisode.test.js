import tvShowEpisode from "../../reducers/TvShowEpisode";
import { EPISODES_FETCHED } from "../../actions/TvShowActions";

it("Set a show in response to EPISODES_FETCHED", () => {
  const episodes = [
    { id: 1, name: "PowerPuffGirls", summary: "A show with three brave girls" }
  ];
  const action = {
    type: EPISODES_FETCHED,
    payload: episodes
  };

  const newState = tvShowEpisode([], action);

  expect(newState).toStrictEqual(episodes);
});
