import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Menu } from 'semantic-ui-react';
import nusLogo from '../logo_blue.png';

const NavBar = () => {
  const logoStyle = {
    width: 150,
    height: 65
  };


  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <img style={logoStyle} src={nusLogo} />
        </Link>
      </h1>
      <ul>
        <li>
        <Link to='/login'>Login</Link>
          <Link to='/home'>Home</Link>
          <Link to='/admission'>Admission</Link>
          <Link to='/academic'>Academic</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
