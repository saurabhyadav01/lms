import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login_Request } from "../redux/actions/LoginAction";

const theme = createTheme();

export default function SignIn() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(Login_Request(state, navigate));
  };

  return (
    <ThemeProvider theme={theme}>

      <Container
        component="main"
        maxWidth="xs"
        sx={{
          
          borderRadius: "5px",
          marginTop: "10%",
    
      
        }}
      > <div style={{textAlign:"center"}} className="main-logo">
      <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
  </div>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            border: "1px solid black",
          
          
          width:"120%",
          padding:"0% 10% 0% 10%" ,
            flexDirection: "column",
            alignItems: "center",
          
          }}
        >
        
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handlechange}
              autoComplete="email"
              autoFocus
              sx={{height:"25"}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={handlechange}
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{width:"100%"}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color:"black"}}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}