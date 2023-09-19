import React from 'react';
import './navbar.css';
import {BiSearchAlt} from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav>
        <searchInput/>
      <a href='#about'><BiSearchAlt/></a>
      <input className='' placeholder='Search' type='text' name='name' autoComplete='name' required/>
    </nav>
  )
}

export default Navbar;