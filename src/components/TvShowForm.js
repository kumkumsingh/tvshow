import React from "react";
//props is passed from TvShowContainer
//This functional component renders details of a particular tvshow which is clicked on home page.
export default function TvShowForm(props) {
  if (props.tvShow.image) {
    const {
      name,
      summary,
      image: { medium }
    } = props.tvShow;
    const div = document.createElement("div");
    div.innerHTML = summary;
    const summaryContent = div.innerText;
    return (
      <div>
        <h2>{name}</h2>
        <section className="Show-detail">
          <img src={medium} alt="Not available"></img>
          <article>{summaryContent}</article>
        </section>
      </div>
    );
  } else {
    return "Loading";
  }
}
