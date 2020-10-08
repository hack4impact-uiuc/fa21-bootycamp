import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/CreateObjectPage.css";

export default function CreateObjectPage() {
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
</div>
    </div>
  );
}
