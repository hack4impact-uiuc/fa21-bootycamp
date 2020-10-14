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
   // backgroundColor:"#C70039",
    fontWeight:"16"
  }
  return (
    <div>
      <h1 style={textStyle}>Gallery</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
      <div style={{display:"flex", justifyContent: "center", position: "relative", fontFamily:'Bangers'}}>
      <Card
        image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
        header='Michael Scott'
        description='this is michael'
        style={{width:"300px", height:"300px",marginTop:"15px"}}
      /><Card
        image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
        header='Michael Scott'
        description='this is michael'
        style={{width:"300px", height:"300px"}}
      /><Card
      image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
      header='Michael Scott'
      description='this is michael'
      style={{width:"300px", height:"300px"}}
    />
    </div>
    <div style={{display:"flex", justifyContent: "center", position: "relative", fontFamily:'Bangers'}}>
      <Card
        image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
        header='Michael Scott'
        description='this is michael'
        style={{width:"300px", height:"300px",marginTop:"15px"}}
      /><Card
        image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
        header='Michael Scott'
        description='this is michael'
        style={{width:"300px", height:"300px"}}
      /><Card
      image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
      header='Michael Scott'
      description='this is michael'
      style={{width:"300px", height:"300px"}}
    />
    </div>
    </div>
  );
}
