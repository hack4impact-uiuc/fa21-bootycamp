import React from 'react';

import { Menu } from "semantic-ui-react";
 import { Link } from "react-router-dom"; 

export default function NavBar(props) {
  return (
    <div>
      <Menu style={{backgroundColor:"black"}}>
        <Menu.Item><Link to="/" style ={{fontFamily:"Bangers",color:"white",fontSize:"20px", textShadow: "2px 2px black", backgroundColor:"#E35980"}}>&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;</Link></Menu.Item>
        <Menu.Item><Link to="/gallery" style ={{fontFamily:"Bangers",color:"white",fontSize:"20px", textShadow: "2px 2px black", backgroundColor:"#E35980"}}>&nbsp;&nbsp;&nbsp;&nbsp;Gallery&nbsp;&nbsp;&nbsp;&nbsp;</Link></Menu.Item>
        <Menu.Item><Link to="/create" style ={{fontFamily:"Bangers",color:"white",fontSize:"20px", textShadow: "2px 2px black", backgroundColor:"#E35980"}}>&nbsp;&nbsp;&nbsp;&nbsp;Create&nbsp;&nbsp;&nbsp;&nbsp;</Link></Menu.Item>
      </Menu>
    </div>
  );
}