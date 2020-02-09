import React from "react";
import ReactHtmlParser from 'react-html-parser'; //A utility for comverting HTML Strings into React Components
//props is passed from TvShowContainer
//This functional component renders details of a particular tvshow which is clicked on home page.
export default function TvShowForm(props) {
    return (
      <div>
        <h2>{props.tvShow.name}</h2>
        <section className="Show-detail">
        {props.tvShow.image && <img src={props.tvShow.image.original} alt='Not Available'></img>}
        <article>{ ReactHtmlParser(props.tvShow.summary) }</article>
        </section>
      </div>
    );
  
}
