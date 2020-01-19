import React, { Component } from "react";
import { shows } from "../constants"; // importing all constants
import { Link } from "react-router-dom";
//this component renders list of 8 static TvShows which is stored in an array in constants file.
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>List Of TVMaze show</h2>
        <div className="homeList">
        {shows.map(show => {
          return (
            <div key={show.id}>
              <Link to={`/show/${show.id}/${show.name}`}>
                <figure>
                  <img
                    src={show.image}
                    alt={"not available"}
                  />
                  <figcaption>
                   {show.name}
                  </figcaption>
                </figure>
              </Link>
            </div>            
          );
        })}
        </div>
      </div>
    );
  }
}
