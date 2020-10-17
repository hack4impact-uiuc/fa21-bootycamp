import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card, Image} from 'semantic-ui-react'

import "../styles/GalleryPage.css";

export default function GalleryPage() {
  return (
    <div>
      <h1 class = "titles">Gallery</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
     <Card.Group itemsPerRow={7}>



     <Card
        href = '/detail'
        image='https://vignette.wikia.nocookie.net/pusheenthecat/images/6/69/FB.gif/revision/latest?cb=20130704140002'
        header='Despawcito Date with Celekitty'
        description='$10,000'
      />


  
      <Card
        href = '/detail'
        image='https://www.countrysidecravings.com/wp-content/uploads/2017/03/three-cheese-pizza-picture.jpg'
        header='Cheese Pizza By Pusheen'
        description='$999.99'
      />
      <Card
        href = '/detail'
        image='https://40aprons.com/wp-content/uploads/2020/03/air-fryer-french-fries-4.jpg'
        header='Fries By Pusheen'
        description='$299.99'
      />
      <Card
        href = '/detail'
        image='https://www.jessicagavin.com/wp-content/uploads/2020/04/grilled-cheese-7-1200.jpg'
        header='Grilled Cheese By Pusheen'
        description='$499.99'
      />
       <Card
        href = '/detail'
        image='https://valentinascorner.com/wp-content/uploads/2020/03/Breadsticks-1.jpg'
        header='Breadsticks By Pusheen'
        description='$499.99'
      />
      <Card
        href = '/detail'
        image='https://therecipecritic.com/wp-content/uploads/2020/03/tiramisu-9.jpg'
        header='Tiramisu By Pusheen'
        description='$499.99'
      />
      
      </Card.Group>

    </div>
  );
}
