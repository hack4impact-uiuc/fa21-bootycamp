import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import { Button, Image } from 'semantic-ui-react'
import logo from './nsn.jpeg';
import one from './coolcafe.jpg';




import "../styles/GalleryPage.css";

export default function GalleryPage() {
  return (
    <Card.Group>
    <Card href='../pages/DetailPage.js' >
      <Card.Content>
        <Image
          floated='right'
          src={logo}
        />
        <Card.Header>Never Say Never</Card.Header>
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
          src={one}
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
  );
}
