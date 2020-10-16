import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card, Icon, Image } from 'semantic-ui-react'

import "../styles/GalleryPage.css";
import blueeyeswhitedragon from './images/blue-eyes-white-dragon.jpg';
import card_trader from './images/card_trader.jpg';
import dark_hole from './images/dark_hole.png';
import dark_magician from './images/dark_magician.jpg';
import exodia_the_forbidden_one from './images/exodia_the_forbidden_one.jpg';
import mirror_force from './images/mirror_force.jpg';
import negate_attack from './images/negate_attack.png';
import reverse_trap from './images/reverse_trap.png';
import storm from './images/storm.jpg';
import swords_of_revealing_lights from './images/swords_of_revealing_lights.jpg';
import the_winged_dragon_of_ra from './images/the_winged_dragon_of_ra.jpg';
import trap_hole from './images/trap_hole.jpg';

export default function GalleryPage() {
  return (
    <div class="cards">
      <h1>Gallery</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}

    <Card.Group itemsPerRow={4}>
        
        {/*<Card
          image='http://cdn.pastemagazine.com/www/articles/assets_c/2019/06/TheOfficeQuote1-thumb-633x351-1115812.png'
          header='Michael Scott'
          description='this is michael'
        />*/}

        <Card
          image={blueeyeswhitedragon}
          header='Blue-Eyes White Dragon'
          description='Monster Card'
          fluid color='red'
        />
        <Card
          image={dark_magician}
          header='Dark Magician'
          description='Monster Card'
        />
        <Card
          image={exodia_the_forbidden_one}
          header='Exodia the Forbidden One'
          description='Monster Card'
        />
        <Card
          image={the_winged_dragon_of_ra}
          header='The Winged Dragon of Ra'
          description='Monster Card'
        />

        <Card
          image={mirror_force}
          header='Mirror Force'
          description='Trap Card'
        />
        <Card
          image={negate_attack}
          header='Negate Attack'
          description='Trap Card'
        />
        <Card
          image={reverse_trap}
          header='Reverse Trap'
          description='Trap Card'
        />
        <Card
          image={trap_hole}
          header='Trap Hole'
          description='Trap Card'
        />

        <Card
          image={card_trader}
          header='Card Trader'
          description='Spell Card'
        />
        <Card
          image={dark_hole}
          header='Dark Hole'
          description='Spell Card'
        />
        <Card
          image={storm}
          header='Storm'
          description='Spell Card'
        />
        <Card
          image={swords_of_revealing_lights}
          header='Swords of Revealing Light'
          description='Spell Card'
        />


      </Card.Group>
      
      
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
 

    </div>
  );
}
