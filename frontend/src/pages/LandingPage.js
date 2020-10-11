import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div class="header">
      {/* This is the homepage of your app. You should have a jumbotron, a button 
      leading to GalleryPage and another button leading to CreateObjectPage. */}
      <div class="zoom">
        <h1>The Kanye West Quote Museum</h1>
      </div>
      <div class="description">
        <h3>Featuring the Best Kanye Quotes Out There</h3>
        <p1>The ultimate collection includes:</p1>
        <o1>
          <li>Iconic Tweets</li>
          <li>Iconic Lyrics</li>
          <li>Iconic Interviews</li>
        </o1>
        <div class="buttons-layout">
          <button class="ui yellow basic button">
            <Link to="/gallery">Quotes</Link>
          </button>

          <button class="ui yellow basic button">
            <Link to="/create">Add</Link>
          </button>
        </div>
      </div>
    </div>

   
  );
}

