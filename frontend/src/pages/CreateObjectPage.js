import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import "../styles/CreateObjectPage.css";

export default function CreateObjectPage() {
  const textStyle = {
    textAlign: "center",
    fontFamily:'Bangers',
    fontSize:"50px",
    color:"white",
    textShadow: "2px 3px black",
    backgroundColor:"#C70039",
    fontWeight:"16",
    width:"50%",
    marginLeft:"25%"
  }
  return (
    
    <div>
      <div style = {{ width:"70%", margin:"auto"}}>
      <h1 style={textStyle}>Design your own ride</h1>
      <div style={{display:"flex", justifyContent: "center", position: "relative"}}>
      <Form>
    <Form.Field>
      <label>Ride Name</label>
      <input placeholder='Ride Name' />
    </Form.Field>
    <Form.Field>
      <label>Ticket Price</label>
      <input placeholder='Ticket Price' />

    </Form.Field>
    <Form.Field>
      <label>Minimum Height</label>
      <input placeholder='Minimum Height' />
    </Form.Field>
    <Form.Field>
      <label>Include a picture!</label>
    <input id="upload" type="file"/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='My name can be included on the ride' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    <br></br>
  </Form>
  <br></br>

  </div>
  <br></br>

  </div>
    </div>
  );
}
