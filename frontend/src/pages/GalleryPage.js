import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card, Icon, Image, CardGroup } from 'semantic-ui-react'

import "../styles/GalleryPage.css";

export default function GalleryPage() {
  

  return (
    

    <div>
      
      <h1>Gallery</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
    <CardGroup style={{display: 'flex', flexDirection: 'row'}}>
    <Card style={{flex: 1}}>
      <Image src="https://i.dailymail.co.uk/i/newpix/2018/04/25/21/4B8CAEE200000578-5657387-Less_than_an_hour_later_West_tweeted_that_his_wife_Kim_Kardashia-a-9_1524688281473.jpg"  />
      <Card.Content>
        <Card.Header>Kanye West Quote #1</Card.Header>
        <Card.Description>
          Kanye is reprimanded by Kim
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
           </div>
            <a class="ui basic red left pointing label">
              434
            </a>
      </div>
      </Card.Content>
    </Card>

    <Card style={{flex: 1}}>
      <Image src="https://img.ifunny.co/images/08f3d30412cf3be8cc9777e5bcb66f45edde3cbf80e9bde3e13ffd65e2af4164_1.jpg" />
      <Card.Content>
        <Card.Header>Kanye West Quote #2</Card.Header>
        <Card.Description>
           Kanye is seemingly nice at ping pong
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
           </div>
            <a class="ui basic red left pointing label">
              1,048
            </a>
      </div>
      </Card.Content>
    </Card>

    
    <Card style={{flex: 1}}>
      <Image src="https://i.pinimg.com/originals/23/79/31/237931f768ef55b97eca17057f6b35ab.jpg" />
      <Card.Content>
        <Card.Header>Kanye West Quote #3</Card.Header>
        <Card.Description>
           Kanye feels like a winner
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
           </div>
            <a class="ui basic red left pointing label">
              1,000
            </a>
      </div>
      </Card.Content>
    </Card>
    
    
    
    <Card style={{flex: 1}}>
      <Image src="https://i.pinimg.com/originals/fa/31/96/fa3196a0ed9b77f655dc72a242c5a811.jpg" />
      <Card.Content>
        <Card.Header>Kanye West Quote #4</Card.Header>
        <Card.Description>
           Kanye is his own bestfriend
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
           </div>
            <a class="ui basic red left pointing label">
              1,030
            </a>
      </div>
      </Card.Content>
    </Card>


  
    <Card style={{flex: 1}}>
      <Image src="https://cdn.thetitlemag.com/wp-content/uploads/2018/04/kanye-7-ninja-tweet.jpg" />
      <Card.Content>
        <Card.Header>Kanye West Quote #5</Card.Header>
        <Card.Description>
           Kanye has never seen a ninja IRL
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
           </div>
            <a class="ui basic red left pointing label">
              1,330
            </a>
      </div>
      </Card.Content>
    </Card>
    </CardGroup>
  )

  

    </div>

  );
  
}


  
  

