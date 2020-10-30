import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card, Image} from 'semantic-ui-react'
import { callApi} from '../utils/api';

import "../styles/GalleryPage.css";


export default function GalleryPage() {
  const [text, setText] = useState([]);
  //callApi().then(text=> setText(text)); 

  useEffect(() => {
   const getText = async () => {
   const data = await callApi();
   setText(data);
   

   //await makePost();
   }
   getText();
  }, []); 

  return (
    <div>
      <h1 className = "titles">Celekitties</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
     <Card.Group itemsPerRow={7}>

    {text.map(item => (
      <Card
      href = '/detail'
      image = {item.image}
      header = {item.name}
      description = {item.description}
      />
    ))}

     
      
      </Card.Group>

    </div>
  );
}
