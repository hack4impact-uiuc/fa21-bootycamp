import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";

import "../styles/DetailPage.css";

export default function DetailPage() {
  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '30px'}}>Specifications</h1>
      {/* This is where you'll display the properties of your object (i.e. price, date, 
        name, etc.) */
        <div style={{color: 'black', fontSize: '30px', marginLeft: '30px'}}>Price</div>}
        <div style={{columnCount: 3, marginBottom: '15px', marginTop: '15px', marginLeft: '30px', fontSize: '20px'}}>
          <div style={{columncount: 3}}></div>
            <div>Red Velvet Cupcake     |     $3.50     |     In Stock</div>
          <div>Macaroons     |     $2.00     |     In Stock</div>
          <div>Red Velvet Cupcake     |     $3.50     |     In Stock</div>
          <div>Red Velvet Cupcake     |     $3.50     |     In Stock</div>
        </div>
    </div>
  );
}
