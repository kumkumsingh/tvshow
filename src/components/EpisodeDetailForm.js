import React from "react";
import ReactHtmlParser from "react-html-parser"; //A utility for comverting HTML Strings into React Components
//props is passed from EpisodeDetailContainer
//this functional component renders particular episode detail of a particular tv show.
export default function EpisodeDetailForm(props) {
  if (!props.episode) return "loading";
  console.log('checking props',props.episode)
  return (
    <div className="Flex-container-episode-detail">
      <h2>Details:{props.episode[0].name}</h2>
      {props.episode[0].image && (
        <img src={props.episode[0].image.medium} alt="Not available"></img>
      )}
      <article>{ReactHtmlParser(props.episode[0].summary)}</article>
    </div>
  );
}
