import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card } from 'semantic-ui-react'

import "../styles/GalleryPage.css";

export default function GalleryPage() {
  const textStyle = {
    textAlign: "center",
    fontFamily:'Bangers',
    fontSize:"50px",
    color:"white",
    textShadow: "2px 3px black",
   backgroundColor:"#C70039",
    fontWeight:"16",
    width:"50%",
    marginLeft:"25%"
  }
  return (
    <div>
      <h1 style={textStyle}>Gallery</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
      <div style={{display:"flex", justifyContent: "center", position: "relative", fontFamily:'Bangers'}}>
      <Card
        image='ride1.png'
        header='Ferris Wheel'
        description='$5.00'
        style={{marginTop:"15px", fontFamily:"Bangers"}}
      /><Card
        image='ride2.png'
        header='Spinny Scott'
        description='$4.00'
      /><Card
      image='ride3.png'
      header='Sum Swings'
      description='$6.00'
    />
    <br></br>
    </div>
    <div style={{display:"flex", justifyContent: "center", position: "relative", fontFamily:'Bangers'}}>
      <Card
        image='ride4.png'
        header='Bike Town'
        description='$2.00'
        style={{marginTop:"15px"}}
      /><Card
        image='ride5.png'
        header='Bhad Bhumpers'
        description='$8.00'
      /><Card
      image='ride6.png'
      header='Swan Lake'
      description='$1.00'
    />
    <br></br>
    </div>
    </div>
  );
}
