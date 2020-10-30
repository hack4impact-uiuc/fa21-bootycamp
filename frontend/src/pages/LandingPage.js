import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Image } from 'semantic-ui-react';
import { callApi } from '../utils/api';
import "../styles/LandingPage.css";
export default function LandingPage() {
 const [text, setText] = useState("");
  //callApi().then(text=> setText(text)); 

  
  return (
   
    <div>
       <h1 class = 'titles'>C A T F E </h1>
      {/* This is the homepage of your app. You should have a jumbotron, a button 
      leading to GalleryPage and another button leading to CreateObjectPage. */}
      <div class = 'container'>
 
  <div class="row">
  <div class="column">
  <img src = "https://cdn2.scratch.mit.edu/get_image/gallery/4174107_200x130.png"></img>
  <img src="https://media4.giphy.com/media/aQ0PfLFwagW52/giphy.gif"></img>
  </div>
  <div class="column">
    <img src="https://i.pinimg.com/originals/c9/e0/70/c9e070c32cce9c388475dfb50fc39ec6.gif"></img>
    <img src="https://i.pinimg.com/originals/cb/82/05/cb8205c6998eb9377d70820a49e24f69.gif"></img>
  </div>
  
  <div class="column">
    <img src="https://media0.giphy.com/media/FRQF9ResnCsjS/giphy.gif"></img>
    <img src="https://parisianavores.paris/wp-content/uploads/2013/01/20110824-pusheen-burger.gif"></img>
  </div>
  <div class="column">
    <img src="https://i.gifer.com/FPdQ.gif"></img>
    <img src="https://pa1.narvii.com/6951/20bb4fbc8492573e12d3996a0589567e99527e3ar1-320-320_00.gif"></img>
  </div>
</div>
<h2 class = 'descr'>EXCLUSIVE INVITE-ONLY CAT CAFE</h2>
  
  
  
      
      <button class = "massive ui button"><Link to="/gallery">Go to Gallery</Link></button>
      <div class = 'buttonclass'>
      <button class = "massive ui button" ><Link to="/create">Create a Cat</Link></button>
     
      </div>
      </div>
     
       </div>





      
      
     

  );
}
