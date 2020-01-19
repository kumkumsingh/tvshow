import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEpisode } from "../actions/TvShowActions";
import EpisodeDetailForm from "./EpisodeDetailForm";

//this container has the particular tvshow episode detail.
class EpisodeDetailContainer extends Component {
  componentDidMount() {
    //fetching episode id which is sent via url on click of every episode on tvshow page.
    const episodeId = this.props.match.params.id;
    //componentDidMount the function which is processed first when the app is rendered
    // The functions definitions are written in actions/TvShowlActions file
    // Get the single episode details of particular TvShow
    this.props.loadEpisode(episodeId);
  }

  render() {
    return (
      <div>
        <EpisodeDetailForm episode={this.props.episode} />
      </div>
    );
  }
}

// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component.
const mapStateToProps = state => {
  return {
    episode: state.TvShowEpisode
  };
};
// connect the component EpisodeDetailContainer with the actions for fetching single episode loadEpisode and mapStateToProps
export default connect(mapStateToProps, { loadEpisode })(
  EpisodeDetailContainer
);
