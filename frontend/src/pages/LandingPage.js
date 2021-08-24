import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      {/* This is the homepage of your app. You should have a jumbotron, a button 
      leading to GalleryPage and another button leading to CreateObjectPage. */}
      <div style={{ backgroundColor: "#64BEFD", width: "50%", height: "200px", marginLeft: "0px", color: "white", textAlign: "center" }}>
        <h1> About This Website </h1>
        <p> What a cool website this is!! I can show you all the memes I love!</p>
      </div>
      <div style={{ backgroundColor: "#00008B", width: "50%", height: "200px", marginLeft: "300px", color: "white", textAlign: "center" }}>
        <h1> About The Creator </h1>
        <p> I like to meme!</p>

      </div>
      <div style={{ backgroundColor: "#64BEFD", width: "50%", height: "200px", marginLeft: "600px", color: "white", textAlign: "center" }}>
        <h1> Iconic Memes and Vines </h1>
        <p> Meme! Meme! Meme!</p>
      </div>
    </div>
  );
}
