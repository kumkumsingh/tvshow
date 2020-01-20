import React from "react";
//props is passed from EpisodeDetailContainer
//this functional component renders particular episode detail of a particular tv show.
export default function EpisodeDetailForm(props) {
  if (!props.episode) return "loading";
  return (
    <div>
      {props.episode.map(episodeDetail => {
        if (episodeDetail.image) {
          const div = document.createElement("div");
          div.innerHTML = episodeDetail.summary;
          const summaryContent = div.innerText;
          return (
            <div
              key={episodeDetail.id}
              className="Flex-container-episode-detail"
            >
              <h2>Details:{episodeDetail.name}</h2>
              <img src={episodeDetail.image.medium} alt="Not available"></img>
              <article>{summaryContent}</article>
            </div>
          );
        }
        return "Image , Summary not available";
      })}
    </div>
  );
}
