import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card } from 'semantic-ui-react'

import "../styles/GalleryPage.css";

export default function GalleryPage() {
  return (
    <div>
      <h1 class = "titles">Gallery</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
     <Card.Group itemsPerRow={7}>
      <Card
        image='https://ci.memecdn.com/1064012.gif'
        header='Catniss Everdeen'
        description='Sous Chef'
      />
      <Card
        image='https://pa1.narvii.com/6352/21b329b9a356054571a52cc64d3dadbf296e62b1_hq.gif'
        header='Fluffin Bieber'
        description='Waiter'
      />
      <Card
        image='https://parisianavores.paris/wp-content/uploads/2013/01/20110824-pusheen-burger.gif'
        header='Cathy'
        description='Staff'
      />
      <Card
        image='https://thumbs.gfycat.com/ImportantSillyKatydid-small.gif'
        header='Pusheen'
        description='Manager'
      />
       <Card
        image='https://media0.giphy.com/media/lXwEriEvWswj6/giphy.gif'
        header='Kitty Perry'
        description='Receptionist'
      />
      </Card.Group>

    </div>
  );
}
