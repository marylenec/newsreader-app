import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink exact to="/articles" ><strong>NEWSREADER</strong></NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <NavLink exact to="/articles" >ARTICLES</NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact to="/visited" >VISITED</NavLink>
          </li>
        </ul>
      </div>
    </nav>
)
}
export default NavBar;
