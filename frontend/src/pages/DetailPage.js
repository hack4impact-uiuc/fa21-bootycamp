import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";

import "../styles/DetailPage.css";

export default function DetailPage() {
  return (
    <div>
    <iframe width="420" height="315"
      src="https://www.youtube.com/embed/Z5-P9v3F8w">
    </iframe>
      {/* This is where you'll display the properties of your object (i.e. price, date, 
        name, etc.) */}
    </div>
  );
}
