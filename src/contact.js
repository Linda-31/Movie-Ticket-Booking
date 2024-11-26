import React, { useState } from 'react';
import { Button } from '@mui/material';
import { styled} from '@mui/system';
import background from "./images/background.jpg"
import { TextField, Typography, Container, Box } from '@mui/material';
import "./App.css";
const ResponsiveButton = styled(Button)(({ theme }) => ({
  width: 'auto', 
  fontWeight: 'bold',
  padding: theme.spacing(2), 
  [theme.breakpoints.up('sm')]: {
    width: 'auto', 
  },
}));

const Contact = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };


  return (
  
<div style={{backgroundImage:`url(${background})`}}>

    <Container component="main" maxWidth="xs"   sx={{
        height: '75vh', // Set the desired height
      
      }} 
      >
        
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 10,
       
        }}
      >
        <div className='sign'>
        <Typography component="h1" variant="h4" color="primary" sx={{fontFamily:"times new roman"}}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography variant="h6" sx={{color:"black",fontFamily:"times new roman"}}>
          Email 
          </Typography>
          <Box sx={{ width: 400, maxWidth: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           </Box>
                <Typography  variant="h6"sx={{color:"black",fontFamily:"times new roman"}}>Password</Typography>
                <Box sx={{ width: 400, maxWidth: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </Box>
       <ResponsiveButton  variant="contained" color="primary" type="submit" className='bt'>
            Sign In
          </ResponsiveButton>
          
        </Box>
        
        </div>
      </Box>
      
    </Container>
    </div>
  );
};

export default Contact;
