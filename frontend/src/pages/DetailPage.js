import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card } from 'semantic-ui-react'

import "../styles/DetailPage.css";

export default function DetailPage() {
  return (
    <div>
      <h1>Detail</h1>
      {/* This is where you'll display the properties of your object (i.e. price, date, 
        name, etc.) */}
        <h2>Name: Cake </h2>
        <h2>Cost: $5.00 </h2>
       

    </div>
  );
}
