import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEpisodes } from "../actions/TvShowActions"; //importing action for tvshow episodes
import TvShowEpisodeForm from "./TvShowEpisodeForm";
//this container has particular tv show episodes lists
class TvShowEpisodeContainer extends Component {
  //componentDidMount the function which is processed first when the app is rendered
  // The functions definitions are written in actions/TvShowActions file
  // Get all the episodes of particular tvshow which clicked on home page.
  componentDidMount() {
    const showId = this.props.match.params.id;
    this.props.loadEpisodes(showId);
  }
  render() {
    return (
      <div>
        <TvShowEpisodeForm episodes={this.props.episodes} />
      </div>
    );
  }
}
// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component
const mapStateToProps = state => {
  return {
    episodes: state.TvShowEpisode
  };
};
// connect the component TvShowEpisodeContainer with the actions loadEpisodes and mapStateToProps
export default connect(mapStateToProps, { loadEpisodes })(
  TvShowEpisodeContainer
);
