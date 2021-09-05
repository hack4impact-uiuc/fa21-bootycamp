import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card, CardGroup } from 'semantic-ui-react'
import { getImages } from "../utils/api";

import "../styles/GalleryPage.css";

export default function GalleryPage() {
  const [images, setImages] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await getImages();

      if (!res) return
      setImages(res.data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>H4I (Meme)bers</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
      <CardGroup itemsPerRow="5">
      {images && images.map(img => (
        <Card
        image={img.image}
        header={img.name}
        description={img.quote}
      />
      ))
      }
      </CardGroup>
    </div>
  );
}
