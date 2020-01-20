import React, { Component } from "react";
import { loadShow } from "../actions/TvShowActions"; //importing action for Tvshow details
import { connect } from "react-redux";
import TvShowForm from "./TvShowForm";

//this container has the particular tv show details
class TvShowContainer extends Component {
  //componentDidMount the function which is processed first when the app is rendered
  // The functions definitions are written in actions/TvShowActions file
  // Get all the details of a particular TvShow.
  componentDidMount() {
    const showName = this.props.match.params.name;
    console.log("checking action diapatched", showName);
    this.props.loadShow(showName);
  }
  render() {
    console.log("checking props in tvshowcontainer", this.props.tvShow);
    return (
      <div>
        <TvShowForm tvShow={this.props.tvShow} />
      </div>
    );
  }
}
// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:
const mapStateToProps = state => {
  return {
    tvShow: state.TvShow
  };
};
// connect the component TvShowContainer with the actions loadShow and mapStateToProps
export default connect(mapStateToProps, { loadShow })(TvShowContainer);
