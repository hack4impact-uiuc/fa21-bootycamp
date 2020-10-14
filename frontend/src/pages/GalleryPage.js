import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card } from 'semantic-ui-react'

import "../styles/GalleryPage.css";

export default function GalleryPage() {
  return (
    <div>
      <h1>Gallery</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}

      <Card
        image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
        header='Michael Scott'
        description='this is michael'
      />
      <Card
        image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
        header='Michael Scott'
        description='this is michael'
      />
      <Card
        image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
        header='Michael Scott'
        description='this is michael'
      />
      <Card
        image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
        header='Michael Scott'
        description='this is michael'
      />

    </div>
  );
}
