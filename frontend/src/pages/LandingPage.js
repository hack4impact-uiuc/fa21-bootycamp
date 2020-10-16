import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import jumbotron from './betterbakery.jpg';
import bakers from './WorldCupBaking.jpg';

import "../styles/LandingPage.css";
//import Montserrat from './Montserrat/Montserrat-ExtraLightItalic.ttf';
//import Montserrat from 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap'


export default function LandingPage() {

  return (
    <div>
      {/* This is the homepage of your app. You should have a jumbotron, a button 
      leading to GalleryPage and another button leading to CreateObjectPage. */}
      <div style ={{ backgroundImage:`url(${jumbotron})`,
      position: 'relative',
      //top: 48,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden',
      //width: '1500px',
      height: '780px',
      textAlign: 'center',
      paddingLeft: '100px',
      paddingRight: '100px'
      }}>

      <div style={{
      color: 'white',
      fontSize: '75px',
      //flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      marginTop: '50px',
      marginLeft: '50px',
      marginRight: '50px',
      textShadow: '0px 0px 25px #000000',
      fontFamily: 'Montserrat:ital,wght@1,200'
      }}>
        Welcome to Archna's Bakery!
      </div>
      
      <div style={{
      alignItems: 'center'
      }}>
      <Button style={{marginTop: '75px', marginRight: '30px', backgroundColor: 'white', boxShadow: '0px 0px 25px #000000'}}>
        <Link to ="/gallery" style={{color: 'black'}}>View Our Selection</Link>
      </Button>
      <Button style={{marginTop: '75px', backgroundColor: 'white', boxShadow: '0px 0px 25px #000000'}}>
        <Link to ="/create" style={{color: 'black'}}>Order Now!</Link>
      </Button>
      </div>
      
      </div>
      <div style={{columnCount: '2'}}>
        <div style={{
        column: 1,
        border: '3px, #F5F2D0',
        color: 'black',
        marginTop: '220px',
        fontSize: '75px',
        marginLeft: '100px',
        marginBottom: '200px',
        }}>
          Meet our Staff!
        </div>
        <div style ={{
          maxWidth: '60%',
          marginTop: '100px'
        }}>
          <img src = {bakers} alt = "bakers at a table" style={{marginTop: '50px', marginBottom: '50px', height: '400px'}}/>
        </div>
      </div>
    </div>
  );
}
