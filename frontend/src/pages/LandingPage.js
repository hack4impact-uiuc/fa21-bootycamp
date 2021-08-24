import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InfoBox } from "../components/InfoBox";

import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <InfoBox backColor="#64BEFD" heading="About This " paragraphDescription="What a cool website this is!! I can show you all the memes I love!" ></InfoBox>
      <InfoBox backColor="#00008B" heading="About The Creator " paragraphDescription="I like to meme!" leftChange="300px"></InfoBox>
      <InfoBox backColor="#64BEFD" heading="Iconic Memes and Vines" paragraphDescription="Meme! Meme! Meme!" leftChange="600px"></InfoBox>


    </div>
  );
}
