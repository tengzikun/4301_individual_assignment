
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Button, Typography, styled } from '@mui/material';
import studentLife from '../student_life.jpeg';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Home = () => {
 
 // const [user, loading, error] = useAuthState(auth);
//  const [name, setName] = useState("");
  const navigate = useNavigate();
/*
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    //  alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
*/
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
       

        &nbsp;&nbsp;&nbsp;
        <div>
          {' '}
          <img style={logoStyle} src={studentLife}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
