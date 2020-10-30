import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import "../styles/CreateObjectPage.css";
import { makePost } from "../utils/api";
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
    marginLeft:"25%",
  }

  const labelStyle = {
    color:"white", 
    fontSize:"22px",
    fontFamily:"Bangers",
    backgroundColor:"#C70039",
    height:"30px",
    width:"48%",
    marginBottom:"15px",
    textShadow: "2px 2px black",
    fontWeight:"5",
    textAlign:"center",
    marginLeft:"25%"
  }
  const [name, setName] = useState("");
  const [rideName, setrideName] = useState("");
  const [ticketPrice, setticketPrice] = useState(0);
  const [minHeight, setminHeight] = useState(0);
  const [imageURL, setimageURL] = useState("");
  const [publishedAuthor, setAuthor] = useState(false);

  return (
    
    <div>
      
      <div style = {{margin:"auto"}}>
      <h1 style={textStyle}>Design your own ride</h1>
      <div style={{display:"flex", justifyContent: "center", position: "relative", width: "50%", margin:"auto",backgroundColor:"black"}}>
      <Form>
      <Form.Field>
      <br></br>
      <br></br>
      <label style={labelStyle}>Name</label>
      <input type="text" placeholder='Name' onChange={event => setName(event.target.value)} />
    </Form.Field>
    <Form.Field>
      <br></br>
      <label style={labelStyle}>Ride Name</label>
      <input type="text" placeholder='Ride Name' onChange={event => setrideName(event.target.value)}  />
    </Form.Field>
    <Form.Field>
      <label style={labelStyle}>Ticket Price</label>
      <input type="text" placeholder='Ticket Price' onChange={event => setticketPrice(event.target.value)}  />

    </Form.Field>
    <Form.Field>
      <label style={labelStyle}>Minimum Height</label>
      <input placeholder='Minimum Height' onChange={event => setminHeight(event.target.value)} />
    </Form.Field>
    <Form.Field>
      <label style={labelStyle}>Include a picture!</label>
    <input placeholder="Image URL" onChange={event => setimageURL(event.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox defaultChecked ={publishedAuthor} onChange={event => setAuthor(!publishedAuthor)} /><span style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name can be included on the ride</span>
    </Form.Field>
    <p style= {{textAlign:"center"}}><Button type='submit' onClick={event => makePost(name, rideName, ticketPrice, minHeight, imageURL, publishedAuthor)} style={{backgroundColor:"#C70039", color:"white", borderRadius:"0px",fontFamily:"Bangers",
    backgroundColor:"#C70039", fontSize:"20px", fontWeight:"5", textShadow: "2px 2px black"}}><span id="lab">Submit</span></Button></p>
    <br></br>
  </Form>

  </div>
  </div>
  <div style={{display:"flex", position: "relative", flexDirection: "column", bottom:"590px", left:"900px"}}>
      <img id="gear1" src ="./gear1.png" style={{width:"80px", height:"80px", position:"relative", left:"0px"}}/>
      <img id="gear3" src ="./gear3.png" style={{width:"80px", height:"80px", position:"relative", left:"30px"}}/>
      <img id="gear2" src ="./gear2.png" style={{width:"80px", height:"80px", position:"relative", left:"0px"}}/>
      <img id="gear1" src ="./gear1.png" style={{width:"80px", height:"80px", position:"relative", left:"-500px"}}/>
      <img id="gear3" src ="./gear3.png" style={{width:"80px", height:"80px", position:"relative", left:"-530px"}}/>
      <img id="gear2" src ="./gear2.png" style={{width:"80px", height:"80px", position:"relative", left:"-500px"}}/>
  </div>
  </div>
  );
}
