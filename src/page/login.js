import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Chip, Button, Grid, styled } from '@mui/material';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
       
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        &nbsp;&nbsp;&nbsp;
        <Button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
          color="success" variant="contained">
          Login
        </Button> 
        &nbsp;&nbsp;&nbsp;
        <Button className="login__btn login__google" onClick={signInWithGoogle} color="success" variant="contained">
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
