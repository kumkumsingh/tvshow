import React from "react";
import { Link } from "react-router-dom";
import moment from "moment"; //to convert date format to MM DD YYYY
//props is passed from TvShowEpisodeForm
export default function TvShowEpisodeForm(props) {
  if (!props.episodes) return "Loading";
  return (
    <div className="Episode-list">
      <h2>Previous Episodes</h2>
      <div>
        {props.episodes && (
          <table className="Episode-table">
            <tbody>
              <tr>
                <th>
                  <h5>Season</h5>
                </th>
                <th>
                  <h5>Number</h5>
                </th>
                <th>
                  <h5>Episode Name</h5>
                </th>
                <th>
                  <h5>AirDate</h5>
                </th>
              </tr>
              {props.episodes.map(episode => {
                return (
                  <tr key={episode.id}>
                    <td style={{ textAlign: "center" }}>{episode.season}</td>
                    <td style={{ textAlign: "center" }}>{episode.number}</td>
                    <td>
                      <Link to={`/episodedetail/${episode.id}`}>
                        {episode.name}
                      </Link>
                    </td>
                    <td>{moment(episode.airdate).format("MMM DD YYYY")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
