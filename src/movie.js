import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { Card, CardContent, CardMedia, Typography, Grid, CardActions, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Movie (){
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // NextPage 
        navigate('/Booking');
      };
    return (
        <div className='box' >
            <br></br><br></br>
         <h2>Movies in Marthandam</h2><br></br><br></br>
     <Grid container spacing={2} justifyContent="center"
         style={{backgroundColor:"skyblue",}}>
       <Grid item xs={12} sm={6} md={3}>
         <Card sx={{ maxWidth: 300}}>
           <CardMedia
             component="img"
                  height="360"
             image="https://upload.wikimedia.org/wikipedia/en/9/90/Hitler_%282024_film%29.jpg"
             alt="Placeholder"
           />
           <CardContent>
             <Typography variant="h5" component="div">
               Hitler
             </Typography>
             <Typography variant="body2" color="text.secondary">
               U/A .Tamil
             </Typography>
           </CardContent>
           <CardActions>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
         Book Ticket
         </Button>
       </CardActions>
         </Card>
       </Grid>
       <Grid item xs={12} sm={6} md={3}>
         <Card sx={{ maxWidth: 300}}>
           <CardMedia
             component="img"
              height="360"
             image="https://images.filmibeat.com/webp/img/popcorn/movie_posters/lubberpandhu-20240828223410-21647.jpg"
             alt="Placeholder"
           />
           <CardContent>
             <Typography variant="h5" component="div">
             Lubber Pandhu
             </Typography>
             <Typography variant="body2" color="text.secondary">
              U. Tamil
             </Typography>
           </CardContent>
           <CardActions>
          <Button  variant="contained" color="primary">
         Book Ticket
         </Button>
       </CardActions>
         </Card>
       </Grid>
       <Grid item xs={12} sm={6} md={3}>
         <Card sx={{ maxWidth: 300}}>
           <CardMedia
             component="img"
             height="360"
             image="https://img.etimg.com/thumb/msid-113289087,width-650,height-488,imgsize-1075013,resizemode-75/devara.jpg"
             alt="Placeholder"
           />
           <CardContent>
             <Typography variant="h5" component="div">
               Devara
             </Typography>
             <Typography variant="body2" color="text.secondary">
               U/A . Tamil
             </Typography>
           </CardContent>
           <CardActions>
          <Button variant="contained" color="primary" >
         Book Ticket
         </Button>
       </CardActions>
         </Card>
       </Grid>
     </Grid>
     </div>
    )
}
export default Movie;