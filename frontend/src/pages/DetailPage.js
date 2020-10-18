import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";

import "../styles/DetailPage.css";

export default function DetailPage() {
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
  const textStyle2 = {
    textAlign: "left",
    fontFamily:'Bangers',
    fontSize:"30px",
    color:"white",
    textShadow: "2px 3px black",
   backgroundColor:"#C70039",
    fontWeight:"16",
    width:"50%",
    marginLeft:"25%"
  }
  return (
    <div>
      <h1 style={textStyle}>Details</h1>
      <div style={textStyle2}>
        <p style={{marginLeft: "10px"}}> Ticket Price:</p>
        <p style={{marginLeft: "10px"}}>Ride Name</p>
        <p style={{marginLeft: "10px"}}>Minimum Height:</p>
      </div>
      {/* This is where you'll display the properties of your object (i.e. price, date, 
        name, etc.) */}
    </div>
  );
}
