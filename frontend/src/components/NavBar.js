import React from 'react';

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

export default function NavBar(props) {
  return (
    <div>
      <Menu>
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link to="/gallery">Gallery</Link></Menu.Item>
        <Menu.Item><Link to="/create">Create</Link></Menu.Item>
      </Menu>
    </div>
  );
}