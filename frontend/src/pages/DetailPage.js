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
    backgroundColor:"black",
    fontWeight:"16",
    width:"50%",
    marginLeft:"25%"
  }
  return (
    <div>
      <h1 style={textStyle}>Details</h1>
      <div style={textStyle2}>
      <div style={{display:"flex", justifyContent: "center", position: "relative", fontFamily:'Bangers', margin:"auto"}}>

        <p style={{marginLeft: "10px"}}>&nbsp;<span style={{backgroundColor:"#C70039"}}>Ticket Price:&nbsp; </span>&nbsp;&nbsp;$5.00</p>
        <p style={{marginLeft: "10px"}}>&nbsp;<span style={{backgroundColor:"#C70039"}}>Ride Name: </span>&nbsp;&nbsp; Twister</p>
        <p style={{marginLeft: "10px"}}>&nbsp;<span style={{backgroundColor:"#C70039"}}>Minimum Height: </span>&nbsp;&nbsp; 60 IN.</p>
      </div>
      <center><img style={{width:"250px", height:"250px", border:"3px #C70039 outset", borderRadius:"50px"}} src="ride1.png"/></center>
      <br></br>
      <br></br>

      </div>
      {/* This is where you'll display the properties of your object (i.e. price, date, 
        name, etc.) */}
    </div>
  );
}
