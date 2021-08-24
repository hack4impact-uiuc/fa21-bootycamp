import React from 'react';

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const InfoBox = ({ backColor, heading, paragraphDescription, children, leftChange }) =>
(
    <div>
        <div style={{ backgroundColor: backColor, width: "50%", height: "200px", color: "white", textAlign: "center", marginLeft: leftChange }}>
            <h1> {heading} </h1>
            <p> {paragraphDescription}</p>
            {children}
        </div>
    </div>
);

export { InfoBox };
