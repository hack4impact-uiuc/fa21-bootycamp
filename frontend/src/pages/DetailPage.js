import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Button } from 'semantic-ui-react'
import "../styles/DetailPage.css";
import { Card, Image } from 'semantic-ui-react'

const ButtonExampleIconShorthand = () => <Button icon='angle down' />

const CardExampleImageCard = () => (
  <Card>
    <Image src='https://www.youtube.com/embed/_Z5-P9v3F8w' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Never Say Never YouTube Video</Card.Header>
      <Card.Meta>YouTube • JustinBieberVEVO • May 27, 2010</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
    </Card.Content>
  </Card>
)


export default function DetailPage() {
  return (
    <div>
<div class="ui card"><div class="image"><iframe width="290" height="180"
src="https://www.youtube.com/embed/_Z5-P9v3F8w">
</iframe></div><div class="content"><div class="header">Never Say Never YouTube Video</div><div class="meta">JustinBieberVEVO • May 27, 2010</div><div class="description">Click the video to watch!</div></div></div>

   
    <h4>The song was used as the theme song for The Karate Kid, and features rap interludes from the film's star, Jaden Smith. He was 10 years old at the time.</h4>
    <h4>When I was 10, my proudest accomplishment was finding all of the hidden halloween candy, but Jaden's cool too.</h4>
    <h4>"Never Say Never" peaked within the top twenty in Canada, Norway, and New Zealand, while reaching the top forty in Australia, as well as charting in other <br/> international markets. </h4>
    <h4>This song is a collaboration between Justin Bieber and Jaden Smith. The song is a "motivational track," containing inspirational lyrics, such as Bieber singing about a life <br/> filled with adversity,  through lines like, "I never thought that I could walk through fire, I never thought that I could take the burn, never had the strength to take it higher." </h4>
    <h4> On the week ending June 17, 2010, the song debuted at number thirty-three on the Billboard Hot 100, propelled by its debut at number seventeen on the Hot Digital <br/> Songs chart selling 76,000 copies.</h4>
      {/* This is where you'll display the properties of your object (i.e. price, date, 
        name, etc.) */}
    </div>
  );
}
