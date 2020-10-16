import React from 'react';

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <Menu>
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link to="/gallery">Music</Link></Menu.Item>
        <Menu.Item><Link to="/create">Create</Link></Menu.Item>
      </Menu>
    </div>
  );
}