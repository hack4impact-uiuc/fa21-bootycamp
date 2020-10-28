import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";

import "../styles/DetailPage.css";
import blueeyeswhitedragon from './images/blue-eyes-white-dragon.jpg';

export default function DetailPage() {
  return (
    <div>
      <h1>Detail</h1>
      {/* This is where you'll display the properties of your object (i.e. price, date, 
        name, etc.) */}
      <div class="container">
        <img src = {blueeyeswhitedragon}/>
        <div class="values">
          <p><strong>Name: </strong> Blue-Eyes White Dragon</p>
          <p><strong>Attribute: </strong> Light</p>
          <p><strong>Level: </strong>8</p>
          <p><strong>Type: </strong> Dragon</p>
          <p><strong>Attack: </strong>3000</p>
          <p><strong>Defense: </strong>2500</p>
        </div>
      </div>
    </div>
  );
}
