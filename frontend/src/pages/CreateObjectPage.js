import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import "../styles/CreateObjectPage.css";
import { makePusheen } from "../utils/api";
export default function CreateObjectPage() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [education, setEducation] = useState("")
  const [profession, setProfession] = useState("")
  const [hobbies, setHobbies] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

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
      <input type="text" placeholder="Name" onChange = {e => setName(e.target.value)}></input>
    </div>
    <div class="field">
      <label>Age</label>
      <input type="text" placeholder="Age" onChange = {e => setAge(e.target.value)}></input>
    </div>
    <div class="field">
      <label>Education</label>
      <input type="text" placeholder="Education" onChange = {e => setEducation(e.target.value)}></input>
    </div>
    <div class="field">
      <label>Paw-fession</label>
      <input type="text" placeholder="Profession"  onChange = {e => setProfession(e.target.value)}></input>
    </div>
    <div class="field">
      <label>Hobbies</label>
      <input type="text" placeholder="Hobbies" onChange = {e => setHobbies(e.target.value)}></input>
    </div>
    <div class="field">
    <label>Description</label>
    <input type="text" placeholder="Description"  onChange = {e => setDescription(e.target.value)}></input>
  </div>
    <div class="field">
      <label>Image</label>
      <input type="text" placeholder="Insert URL"  onChange = {e => setImage(e.target.value)}></input>
    </div>
  </div>
 
</div>
</div>

<div>
<div class = "submit">
<button class="ui button" type="submit" onClick = {event => makePusheen(name,age,education,profession, hobbies,description, image)}>Submit</button>
</div>
<Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div class = "modal"><Button>Show Modal</Button></div>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={image} wrapped />
        <Modal.Description>
          <Header>{name}</Header>
          <p>
          {description}
           
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
