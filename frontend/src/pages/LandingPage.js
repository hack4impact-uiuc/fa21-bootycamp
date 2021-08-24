import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      {/* This is the homepage of your app. You should have a jumbotron, a button 
      leading to GalleryPage and another button leading to CreateObjectPage. */}
      <div style={{ backgroundColor: "#64BEFD", width: "50%", height: "200px", marginLeft: "0px", color: "white", textAlign: "center" }}>
        <h1>Hello world!</h1>
      </div>
    </div>
  );
}
