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
        href='./detail'
        image='ride1.png'
        header='Ferris Wheel'
        meta='$5.00'
        description='ride it'
        style={{marginTop:"15px", fontFamily:"Bangers",border:"5px outset #c70039", marginRight:"20px"}}
      /><Card
        href='./detail'
        image='ride2.png'
        header='Spinneroo'
        meta='$4.00'
        description='ride it'
        style={{border:"5px outset #c70039", marginRight:"20px"}}

      /><Card
      href='./detail'
      image='ride3.png'
      header='Sum Swings'
      meta='$6.00'
      description='ride it'
      style={{border:"5px outset #c70039"}}

    />
    <br></br>
    </div>
    <div style={{display:"flex", justifyContent: "center", position: "relative", fontFamily:'Bangers'}}>
      <Card
        href='./detail'
        image='ride4.png'
        header='Bike Town'
        meta='$2.00'
        description='ride it'
        style={{marginTop:"15px", border:"5px outset #c70039", marginRight:"20px"}}

      /><Card
        href='./detail'
        image='ride5.png'
        header='Bhad Bhumpers'
        meta='$8.00'
        description='ride it'
        style={{border:"5px outset #c70039", marginRight:"20px"}}

      /><Card
      href='./detail'
      image='ride6.png'
      header='Swan Lake'
      meta='$1.00'
      description='ride it'
      style={{border:"5px outset #c70039"}}

    />
    <br></br>
    </div>
    </div>
  );
}
