import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import { Button, Image } from 'semantic-ui-react'
import logo from './nsn.jpeg';
import { Link } from "react-router-dom";
import cafe from './cool.png';
import syre from './syre.jpg';
import icon from './icon.jpg';
import ghost from './ghost.jpg';
import sunset from './sunset.png';
import ctv2 from './CTV2.jpg';
import erys from './erys.jpg';
import "../styles/GalleryPage.css";

export default function GalleryPage() {
  return (
    <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          src={logo}
        />
        <Card.Header><Link to="/detail">Never Say Never</Link></Card.Header>
        <Card.Meta>Justin Bieber ft. Jaden Smith</Card.Meta>
        <Card.Description>
          Never Say Never was Jaden's first song, where he <strong>rapped </strong> alongside Justin Bieber singing.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          src={cafe}
        />
        <Card.Header><Link to="/cafe">The Cool Cafe: Cool Tape Vol. 1</Link></Card.Header>
        <Card.Meta>Jaden Smith</Card.Meta>
        <Card.Description>
          The Cool Cafe was the American rapper's <strong>debut</strong> mixtape.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          src={ctv2}
        />
        <Card.Header><Link to="/detail">The Cool Cafe: Cool Tape Vol. 2</Link></Card.Header>
        <Card.Meta>Jaden Smith</Card.Meta>
        <Card.Description>
          CTV2 is the second mixtape by American rapper Jaden Smith. 
        </Card.Description>
      </Card.Content>
    </Card>    
    <Card>
      <Card.Content>
        <Image
          floated='right'
          src={icon}   
        />
        <Card.Header><Link to="/detail">Icon</Link></Card.Header>
        <Card.Meta>Jaden Smith</Card.Meta>
        <Card.Description>
          Although this song is a part of SYRE, this song was released as a single. This was Jaden's most successful single. 
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          src={syre}   
        />
        <Card.Header><Link to="/cafe">SYRE</Link></Card.Header>
        <Card.Meta>Jaden Smith</Card.Meta>
        <Card.Description>
          Jaden's debut studio album that was released in 2017.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          src={ghost}   
        />
        <Card.Header><Link to="/detail">GHOST</Link></Card.Header>
        <Card.Meta>Jaden Smith</Card.Meta>
        <Card.Description>
          “Ghost” was presumably the debut track by Jaden Smith that was rumored to be on his upcoming 2019 album, ERYS. 
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          src={erys}
        />
        <Card.Header><Link to="/detail">ERYS</Link></Card.Header>
        <Card.Meta>Jaden Smith</Card.Meta>
        <Card.Description>
          ERYS is the second studio album by American rapper Jaden.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          src={sunset}   
        />
        <Card.Header><Link to="/detail">The Sunset Tapes: A Cool Tape Story</Link></Card.Header>
        <Card.Meta>Jaden Smith</Card.Meta>
        <Card.Description>
        The Sunset Tapes: A Cool Tape Story is the third mixtape by American rapper Jaden. 
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
  );
}
