import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import "../styles/CreateObjectPage.css";

export default function CreateObjectPage() {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <h1 class = 'titles'>Create - A - Pusheen</h1>
      {/* This is where you'll add a new item to your database. Use a form to accept user input */}
      <img class = "centerimg" src = "https://media4.giphy.com/media/jEyKIvmt0BgLC/giphy.gif"></img>
      <div class = "outside">
      <div class="ui form">
  <div class="fields">
    <div class="field">
      <label>Name</label>
      <input type="text" placeholder="Name"></input>
    </div>
    <div class="field">
      <label>Age</label>
      <input type="text" placeholder="Age"></input>
    </div>
    <div class="field">
      <label>Education</label>
      <input type="text" placeholder="Education"></input>
    </div>
    <div class="field">
      <label>Paw-fession</label>
      <input type="text" placeholder="Profession"></input>
    </div>
    <div class="field">
      <label>Hobbies</label>
      <input type="text" placeholder="Hobbies"></input>
    </div>
    <div class="field">
      <label>Image</label>
      <input type="file" placeholder="Insert File"></input>
    </div>
  </div>
  <div class="field">
    <label>Description</label>
    <textarea rows="2"></textarea>
  </div>
</div>
</div>

<div>
<button class="ui button" type="submit">Submit</button>
<Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://pa1.narvii.com/6352/7f28a2e6918bcd6a9c7c3d580ae5b18965786e9f_00.gif' wrapped />
        <Modal.Description>
          <Header>Taylor Hissed</Header>
          <p>
           Description: Taylor Alison Hissed is an American singer-songwriter. Her narrative songwriting, which often centers around her paws-onal life, has received widespread critical plaudits and media coverage. (from Wikipedia)
           
          </p>
          <p></p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  
</div>
    </div>
  );
}
