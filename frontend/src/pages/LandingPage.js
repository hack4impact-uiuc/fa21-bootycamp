import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import "../styles/LandingPage.css";
import jumbotron from './rollercoaster2.png';
import jumbotron2 from './stripes.jpg';
import { callApi, makePost } from '../utils/api'
export default function LandingPage() {
  const [index,setIndex] = useState(0);
  const [words, setWords] = useState(["Food","Rides","Entertainment"]);
  const [column, setColumn] = useState(["./cups.png", "./mill.png", "./bounce.png"]);
  const [column2, setColumn2] = useState(["./popcorn.png", "./wheel.png", "./circ.png"]);
  const [column3, setColumn3] = useState(["./ice.png", "./coaster.png", "./game.png"]);
  const [id, setID] = useState(["img1","img2","img3"]);

  const myStyle = {
    backgroundImage: `url(${jumbotron})`,
    backgroundSize: 'cover',
    color:"white",
    backgroundColor:"black",
    width: "100%",
    height:"300px",
    textAlign: "center",
    fontFamily:'Bangers',
    textShadow: "4px 4px black"
  };
  const myStyle2 = {
    backgroundImage: `url(${jumbotron2})`,
    backgroundSize: 'cover',
    color:"white",
    width: "100%",
    height:"8px",
    opacity:"0.8",
  };

  const buttonStyle = {
    marginRight:"20px", 
    backgroundColor:"#C70039", 
    fontFamily:"Bangers", 
    textShadow: "2px 2px black", 
    padding:"20px 50px", 
    fontSize:"25px", 
    boxShadow: "2px 2px black"
  }

  const textStyle = {
    textAlign: "center",
    fontFamily:'Bangers',
    fontSize:"50px",
    color:"white",
    textShadow: "2px 3px black",
   // backgroundColor:"#C70039",
    fontWeight:"16"
  }

 
  return (
    <div>
      {/* This is the homepage of your app. You should have a jumbotron, a button 
      leading to GalleryPage and another button leading to CreateObjectPage. */}
      {/* <img src={require("./cotton.jpeg")}/>*/}
      <div style = {myStyle}>
      <br></br>
      <br></br>
      <h1 style={{fontSize:"70px", fontFamily:'Bangers',fontWeight:"6"}}>Welcome to Six Flags!</h1>
      <br></br>
      <Button id="button1" style={buttonStyle}><Link to="/gallery" style ={{color:"white", fontWeight:"5"}}>Rides</Link></Button>
      <Button id="button2" style={{marginRight:"20px", backgroundColor:"#C70039", fontFamily:"Bangers", textShadow: "2px 2px black", padding:"20px 50px", fontSize:"25px", boxShadow: "2px 2px black"}}><Link to="/create" style ={{color:"white", fontWeight:"5"}}>Create</Link></Button>
      </div>
      <div style = {myStyle2}>
      </div>
      <div style={{display:"flex", justifyContent: "center", position: "relative"}}>
      <h1 style={textStyle}>We have <span style={{color:"#FF769D"}}>{words[index]}</span></h1>
      <Button onClick = {() => {
        if (index > 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
        }} id="button3" style={{color:"white", position:"absolute", right:"0", marginRight:"30px", backgroundColor:"#C70039", fontFamily:"Bangers", textShadow: "2px 2px black", padding:"10px 40px", fontSize:"20px", boxShadow: "2px 2px black", fontWeight:"5"}}>Explore </Button>
      </div>
      <div style={{display:"flex", justifyContent: "center", position: "relative", marginTop:"-30px"}}>
      <img id={id[index]} style={{width:"200px", height:"200px", marginRight:"40px", border:"3px #C70039 outset", borderRadius:"50px"}} src={column[index]}/>
      <img id={id[index]} style={{width:"200px", height:"200px", marginRight:"40px", border:"3px #C70039 outset", borderRadius:"50px"}} src={column2[index]}/>
      <img id={id[index]} style={{width:"200px", height:"200px", border:"3px #C70039 outset", borderRadius:"50px"}} src={column3[index]}/>
      </div>
      <br></br>
      <br></br>
      <br></br>


    </div>
  );
}
