import React from 'react';

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <Menu style={{ backgroundColor: "black", color: "white" }}>
        <Menu.Item style={{ color: "white", fontSize: "20px", textShadow: "2px 2px black" }}><Link to="/">Home</Link></Menu.Item>
        <Menu.Item style={{ color: "white", fontSize: "20px", textShadow: "2px 2px black" }}><Link to="/gallery">Gallery</Link></Menu.Item>
      </Menu>
    </div>
  );
}