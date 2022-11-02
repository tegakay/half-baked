import React from "react";

export default function Card(props) {
  return (
    <li className="articles">
      <div class="header">
        <img
          class="thumbnail"
          src={props.url}
          alt="thumbnail"
        />
      </div>
      <div class="body">
        <h3 class="title">
         {props.name}
        </h3>
        <p class="subtitle">Last Updated: 05 July 2022</p>

        <ul class="tags">
          <li class="tag-item">#Kotlin</li>
          <li class="tag-item">#Android</li>
        </ul>
      </div>
    </li>
  );
}
