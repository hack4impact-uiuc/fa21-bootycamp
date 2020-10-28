import React, { useEffect, useState } from "react";
import { Button, Form, Segment } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import "../styles/CreateObjectPage.css";

export default function CreateObjectPage() {
  return (
    <div>
      <h1>Create</h1>
      <div class="box">
        <Segment inverted>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Card Name' placeholder='Card Name' />
              <Form.Input fluid label='Attribute' placeholder='Attribute' />
            </Form.Group>
            
            <Form.Input fluid label='Level' placeholder='Level' />
            <Form.Input fluid label='Type' placeholder='Type' />
            <Form.Group widths='equal'>
              <Form.Input fluid label='Attack' placeholder='Attack' />
              <Form.Input fluid label='Defense' placeholder='Defense' />
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
      </div>
      {/* This is where you'll add a new item to your database. Use a form to accept user input */}
    </div>
  );
}
