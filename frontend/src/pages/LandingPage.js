import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

import "../styles/LandingPage.css";
import background from './images/background.png';
 
export default function LandingPage() {
  return (
    <div class="landing">
      {/* This is the homepage of your app. You should have a jumbotron, a button 
      leading to GalleryPage and another button leading to CreateObjectPage. */}
      
      <img src ={background}/>
      <div class="welcomeMsg">
        <h1>Welcome to my Yu-Gi-Oh Collection!</h1>
        <p>It's time to d-d-d-duel! Here I'll showcase a variety of cards - from more popular ones like the "Dark Magician" to some of my personal favorites like "Exodia the Forbidden One." 
          Feel free to use the menu bar at the top or the buttons below to view my entire card collection or add your own!</p>
        <Link to="/gallery"><Button color='black'>Go to Gallery</Button></Link>
        <Link to="/create"><Button color='black'>Create your Own</Button></Link>
      </div>
    </div>
  );
}
