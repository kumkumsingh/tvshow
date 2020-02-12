import React from "react";
import "./styles/App.css";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import TvShowContainer from "./components/TvShowContainer";
import TvShowEpisodeContainer from "./components/TvShowEpisodeContainer";
import EpisodeDetailContainer from "./components/EpisodeDetailContainer";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App-header">
        <Route path="/" exact component={Home} />
        <Route path="/show/:id/:name" exact component={TvShowContainer} />
        <Route
          path="/show/:id/:name"
          exact
          component={TvShowEpisodeContainer}
        />
        <Route path="/episodedetail/:id" component={EpisodeDetailContainer} />
      </div>
    </Provider>
  );
}

export default App;
