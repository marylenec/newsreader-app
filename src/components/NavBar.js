import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <NavLink exact to='/' ><strong>NEWSREADER</strong></NavLink>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <NavLink exact to='/articles' >ARTICLES</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to='/visited' >VISITED</NavLink>
          </li>
        </ul>
      </div>
    </nav>
)
}
export default NavBar;
