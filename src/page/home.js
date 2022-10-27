import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Button, Typography, styled } from '@mui/material';
import studentLife from '../student_life.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: 20
  }));

  const logoStyle = {
    width: 1000,
    height: 600
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex'
      }}
    >
      <div>
        {' '}
        <Div>{'NUS is a leading research university in Asia'}</Div>
        <div>
          {' '}
          <img style={logoStyle} src={studentLife}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
