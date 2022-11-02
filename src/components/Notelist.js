import React from "react";
import Card from "./Card"

export default function Notelist(props) {
  var theData = props.news;

  const newsdata = theData.map((cards) => {
    if (theData.length > 0) {
      return (
        <li>
          <Card
            key={cards.id}
            id={cards.id}
            name={cards.name}
            url={cards.url}
          />
        </li>
      );
    } else {
      return <h2>Still Loading</h2>;
    }
  });

  return <ul className="notelist">{newsdata}</ul>;
}
