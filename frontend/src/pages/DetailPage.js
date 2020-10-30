import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card } from 'semantic-ui-react'

import "../styles/DetailPage.css";

export default function DetailPage() {
  return (
    <div>
      <h1></h1>
      {/* This is where you'll display the properties of your object (i.e. price, date, 
        name, etc.) */}
        <h2 class = 'center'>About Fluffin Bieber</h2>
        <h3 class = 'center'> Paw-p star</h3>
        <img class = 'centerimg' src = "https://vignette.wikia.nocookie.net/pusheenthecat/images/6/69/FB.gif/revision/latest?cb=20130704140002" ></img>
        <div class = 'pinkcontainer'>

          <h3 class = 'center2'> Age: 4 Cat years</h3>
          <h3 class = 'center2'> Talents: Singing, making remixes, meowing, hair</h3>
          <h3 class = 'center2'> Join Fluffin on a romantic date for only $10,000 *not including tax</h3>


        </div>

    </div>
  );
}
