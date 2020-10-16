import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import data from "../data/mockData";
import { Button } from 'semantic-ui-react'
import { Card, Image } from 'semantic-ui-react'
import "../styles/CafePage.css";
import one from './one.jpg';
import two from './two.png';
import three from './three.jpg';
import four from './four.jpg';
import five from './five.jpg';
import six from './six.jpg';
import seven from './seven.jpg';
import eight from './eight.jpeg';
import nine from './nine.jpg';
import ten from './ten.jpeg';
import eleven from './eleven.jpeg';
import twelve from './twelve.jpg';
import thirteen from './thirteen.jpeg';
import fourteen from './fourteen.jpg';
import fifteen from './fifteen.jpg';
import "../styles/ImagePage.css";


export default function ImagePage() {
    return (
<div class="row">
  <div class="column">
    <img src={one}></img>
    <img src={two}></img>
    <img src={ten}></img>
  </div>
  <div class="column">
  <img src={five}></img>
  <img src={six}></img>
  <img src={nine}></img>
  </div>
  <div class="column">
  <img src={four}></img>
  <img src={three}></img>
  <img src={fifteen}></img>
  <img src={fourteen}></img>
  </div>
  <div class="column">
  <img src={seven}></img>
  <img src={eight}></img>
  <img src={twelve}></img>
  <img src={thirteen}></img>
  </div>
</div>

    );
}
