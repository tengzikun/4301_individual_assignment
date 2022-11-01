import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Chip } from '@mui/material';
import { textAlign } from '@mui/system';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Academic = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  function createData(Mname: String, code: String) {
    return { Mname, code };
  }

  const myStyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Sans-Serif',
    textAlign: 'centre'
  };
  const rows = [
    createData('Introduction to Business Analytics', 'BT1101'),
    createData('Econometrics Modelling for Business Analytics', 'BT2101'),
    createData('Data Management and Visualisation', 'BT2102	'),
    createData('Optimization Methods in Business Analytics','BT2103'),
    createData('Enterprise Systems Architecture and Design', 'IS2103'),
    createData('Information Systems Leadership and Communication', 'IS3103'),
    createData('Calculus with Applications', 'MA1312'),
    createData('Enterprise Systems Interface Design and Development', 'IS3106'),
    createData(
      'B.Comp Dissertation or Industrial Experience Requirement',
      'CP4101'
    ),
    createData('Probability and Statistics', 'ST2334'),
    createData('Digital Media Marketing', 'IS3150'),
    createData('Systematic Trading Strategies and Systems', 'IS4226'),
    createData('Information Technologies in Financial Services', 'IS4228'),
    createData('Digital Product Management', 'IS4262'),
    createData('Pervasive Technology Solutions and Development', 'IS4151'),
    createData('Introduction to Computer Networks', 'CS2105'),
    createData('Cloud Services and Infrastructure Management', 'IS4236'),
    createData('Agile IT with DevOps', 'IS4301')
  ];
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Module Title</TableCell>
              <TableCell>Module Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.Mname}</TableCell>
                <TableCell>{row.code}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Academic;
