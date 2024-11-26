import React from 'react';
import { Button } from '@mui/material';
import { styled} from '@mui/system';
import { Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import "./App.css";
const ResponsiveButton = styled(Button)(({ theme }) => ({
    width: 'auto', // Full width on small screens
    fontWeight: 'bold',
    padding: theme.spacing(2), // Responsive padding
    [theme.breakpoints.up('sm')]: {
      width: 'auto', // Auto width on larger screens
    },
  }));
 



function Booking() {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/en/9/90/Hitler_%282024_film%29.jpg';
   
    const navigate = useNavigate();
    const addFunction = () => {
    navigate('/seat');
   }; 
    return <div style={{backgroundColor:"skyblue",
        padding:'50px',
    }}>
      <Container style={{ marginTop: '20px',
}}>
     <img  src={imageUrl} alt="Placeholder" style={{ width: '200px', height: 'auto',  float:'right', }} />
      <Typography variant="h4">Hitler</Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
      U . 2 hrs 26 mins
      </Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
      Drama
      </Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
      Tamil
      </Typography>
      <ResponsiveButton variant="contained" color="primary">
      Watch Trailer
    </ResponsiveButton>
    </Container><br></br><br></br>
 
    <Container style={{ marginTop: '20px',
    backgroundColor:"white", border:'10px', borderRadius:"10px", }}>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Choose your Date" />
      </DemoContainer>
    </LocalizationProvider>
    <br></br><h5>Lakshmi Theatre Dolby Atmos, Kuzhithurai</h5>
    <ResponsiveButton variant="outlined" color="primary" onClick={addFunction}>
      2.30 PM
    </ResponsiveButton>
    <ResponsiveButton variant="outlined" color="primary">
      6.30 PM
    </ResponsiveButton>
    <br></br><h5>Anand Cinemas, Marthandam</h5>
    <ResponsiveButton variant="outlined" color="primary">
      11.30 PM
    </ResponsiveButton>
    <ResponsiveButton variant="outlined" color="primary">
      2.30 PM
    </ResponsiveButton>
    <ResponsiveButton variant="outlined" color="primary">
      6.30 PM
    </ResponsiveButton>
    </Container>
    
  </div>

}
export default Booking;