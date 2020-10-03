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
        image='https://raw.githubusercontent.com/hack4impact-uiuc/Academy-Git-Demo/master/adorable.JPG?token=ADT32ZKMXF4TLRDLNN3JA627PDQSU'
        header='Otter'
        description='otter otter alma otter'
      />

    </div>
  );
}
