import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card } from 'semantic-ui-react'
import { callApi, makePost } from '../utils/api'

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
  const [rides, setRide] = useState([]);
  useEffect(() => {
    const demoCall = async () => {
      const rides = await callApi();
      setRide(rides);
      //await makePost("special message");
    };
    demoCall();
  }, []);
  return (
    <div>
      <h1 style={textStyle}>Gallery</h1>
      <br></br>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
      <div style={{display:"flex", justifyContent: "center", position: "relative", fontFamily:'Bangers', margin:"auto"}}>
      <Card.Group itemsPerRow={6}>
      {rides.map((value) => (
      <Card
          href='./detail'
          image={value.imageURL}
          header={value.rideName}
          meta={"$" + value.ticketPrice + ".00"}
          description='ride it'
          style={{ fontFamily:"Bangers",border:"5px outset #C70039"}}
        />
    ))}
    </Card.Group>
      
    <br></br>
    </div>
    </div>
  );
}
