import React from 'react';

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <Menu>
        <Menu.Item style={{color: 'black'}}><Link to="/" style={{color: 'black'}}>Home</Link></Menu.Item>
        <Menu.Item><Link to="/gallery" style={{color: 'black'}}>Sweets!</Link></Menu.Item>
        <Menu.Item><Link to="/create" style={{color: 'black'}}>Order</Link></Menu.Item>
      </Menu>
    </div>
  );
}