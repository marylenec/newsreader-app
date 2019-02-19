import React from 'react'
import {NavLink} from 'react-router-dom';

const Home = (props) => {

return (
  <main className='ListContainer row'>
  <NavLink exact to='/articles' ><button className='btn default-btn mr-3'>ARTICLES</button></NavLink>
  <NavLink exact to='/visited' ><button className='btn default-btn'>VISITED</button></NavLink>
  </main>
)

}
export default Home;
