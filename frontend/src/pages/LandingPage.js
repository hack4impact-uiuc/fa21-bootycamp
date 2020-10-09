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
      <div class="header">
        <h1>Welcome to my Yu-Gi-Oh Collection!</h1>
        <p>It's time to duel! Here I'll showcase some of my favorite cards. orem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula ipsum nisi, vel bibendum dui imperdiet sit amet. In eleifend nisi lectus, eget fringilla turpis porttitor et. Donec id ipsum eget nulla dictum faucibus sed vitae mi.</p>
        <Link to="/gallery"><Button color='black'>Go to Gallery</Button></Link>
        <Link to="/create"><Button color='black'>Create your Own</Button></Link>
      </div>
    </div>
  );
}
