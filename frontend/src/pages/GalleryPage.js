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
      <Card
        image='https://www.countrysidecravings.com/wp-content/uploads/2017/03/three-cheese-pizza-picture.jpg'
        header='Cheese Pizza'
        description='$9.99'
      />
      <Card
        image='https://40aprons.com/wp-content/uploads/2020/03/air-fryer-french-fries-4.jpg'
        header='Fries'
        description='$2.99'
      />
      <Card
        image='https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/The-Best-Ever-Grilled-Cheese-Sandwich_EXPS_THSO18_222725_D03_06_4b.jpg'
        header='Grilled Cheese'
        description='$4.99'
      />
      <Card
        image='https://www.tasteofhome.com/wp-content/uploads/2018/01/Veggie-Tacos_EXPS_SDFM17_32191_C10_06_5b-1.jpg'
        header='Tacos'
        description='$6.99'
      />
       <Card
        image='https://kirbiecravings.com/wp-content/uploads/2019/03/keto-garlic-breadsticks-7a.jpg'
        header='Breadsticks'
        description='$4.99'
      />
      <Card
        image='https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1.jpg'
        header='Tiramisu'
        description='$4.99'
      />
      
      </Card.Group>

    </div>
  );
}
