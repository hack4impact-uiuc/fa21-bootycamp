import React, { useEffect, useState } from "react";
import logo from './jaden.jpg';
import "../styles/LandingPage.css";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default function LandingPage() {
  const ButtonExampleButton = () => <Button>Click Here</Button>
  return (

    <div class="container">
    {/* This is the homepage of your app. You should have a jumbotron, a button 
    leading to GalleryPage and another button leading to CreateObjectPage.  */}
    <div class="jaden">
      <img src={logo} alt="Logo" width="1500" height="800"/>;
      <button class="btn"><Link to="/image">Image Gallery</Link></button>
      <button class="btn1"><Link to="/gallery">My Music</Link></button>
      <div class="img">
        <h1>J A D E N</h1>
      </div>
    </div>
  </div>
  );
}