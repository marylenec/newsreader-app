import React from 'react'
import { Link } from 'react-router-dom';

const Home = (props) => {

return (
  <main className='ListContainer row'>
    <section>
      <h1>Welcome to NewsReader!</h1>
      <p className='row center-block'>
      Read our great&nbsp;<Link className='default-link' to='/articles'>articles</Link>&nbsp;or check out&nbsp;<Link className='default-link'  to='/visited'>visited</Link>&nbsp;articles!
      </p>
    </section>
  </main>
)
}
export default Home;
