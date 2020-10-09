import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div>
       <h1 class = 'titles'>Welcome to my Restaurant!</h1>
      {/* This is the homepage of your app. You should have a jumbotron, a button 
      leading to GalleryPage and another button leading to CreateObjectPage. */}
      <div class="container">
      <img src="https://retaildesignblog.net/wp-content/uploads/2014/04/Peppes-Pizza-restaurant-by-RISS-INTERIORARKITEKTER-Oslo-Norway.jpg" ></img>
      <button class = "massive ui button"><Link to="/gallery">Go to Gallery</Link></button>
      <div class = 'buttonclass'>
      <button class = "massive ui button" ><Link to="/create">Create user</Link></button>
      </div>
     
       </div>





      
      
     
    </div>
  );
}
