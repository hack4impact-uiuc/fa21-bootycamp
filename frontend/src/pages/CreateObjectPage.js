import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import "../styles/CreateObjectPage.css";

export default function CreateObjectPage() {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <h1>Create</h1>
      {/* This is where you'll add a new item to your database. Use a form to accept user input */}
      <div class="ui form">
  <div class="fields">
    <div class="field">
      <label>First name</label>
      <input type="text" placeholder="First Name"></input>
    </div>
    <div class="field">
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name"></input>
    </div>
    <div class="field">
      <label>Last name</label>
      <input type="text" placeholder="Last Name"></input>
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
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
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
