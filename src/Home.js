import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { Toolbar,  TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent, CardMedia, Typography, Grid, CardActions, Button, Box} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const images = [
   "https://enewz.in/wp-content/uploads/2024/03/goat-movie-ff.jpg",
  "https://img.etimg.com/thumb/msid-113145837,width-650,height-488,imgsize-1214428,resizemode-75/devara-part-1-poster.jpg",
  "https://static.moviecrow.com/marquee/lubber-pandhu-review----a-wholesome-entertainer-powered-with-solid-drama/234819_thumb_665.jpg",
];

const cardsData = [
  {
    title: 'Vettaiyan',
    description: 'Tamil',
    additionalDescription: 'Action, Drama',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Vettaiyan_poster.jpg',
  },
  {
    title: 'Jigra',
    description: 'Hindi',
    additionalDescription: 'Drama',
    image: 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240905091716.jpg',
  },
  {
    title: 'Viswam',
    description: 'Telugu',
    additionalDescription: 'Action, Drama',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLLT9L4t9mo_Oy7MKKmhzfK6BMkcqONMQbw&s',
  },
  {
    title: 'Badass Ravikumar',
    description: 'Hindi',
    additionalDescription: 'Action, Drama',
    image: 'https://m.media-amazon.com/images/M/MV5BYmNjNmM0ZWMtZWIwZS00ZmFmLWFmNDAtMWE1MzQ4YjMzZTE3XkEyXkFqcGc@._V1_.jpg',
  },
  {
    title: 'Martin',
    description: 'Kannada',
    additionalDescription: 'Action, Romance',
    image: 'https://assetscdn1.paytm.com/images/cinema/martin1-46216260-8c2e-11ec-a324-23682b4f5e45.jpg',
  },
  {
    title: 'Venom',
    description: 'English',
    additionalDescription: 'Action, Adventure',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6lDQzogkOttukmtaU6FbXDWINNNl5ig3Jw&s',
  },
];



function Home() {

  // responsive card slider 
  const sliderRef = React.useRef();
  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
 // responsive card slider

 const navigate = useNavigate();
 const handleButtonClick = () => {
  // NextPage 
  navigate('/Booking');
};

   return (
        
        <div className="box">
        <Box sx={{ width: '80%',  margin: '0 auto', padding: 2 }}>
        <Carousel useKeyboardArrows={true} autoPlay interval="1000" transitionTime="1000" showThumbs={false} showStatus={false}>
          {images.map((URL, index) => (
            <div className="slide">
              <img alt="sample_file" src={URL} key={index} height={460}/>
            </div>
           
          ))}
        </Carousel>
        </Box>

{/* Responsive search bar */}
<Box sx={{ width: '80%',  margin: '0 auto', padding: 2, position:"relative", left:"120px"}}>
        <Toolbar>
        <IconButton sx={{
            color: 'black'}}
         type="submit" aria-label="search" >
          <SearchIcon />
        </IconButton>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search a Movie or a Theatre"
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            width: { xs: '100%', sm: '600px' }, // Responsive width
            marginRight: 1,  
          }}
        />
            <Button className="sb" variant="contained" color="primary">
        Marthandam
        </Button>
        </Toolbar>
        </Box>
        {/* Responsive search bar */}
    
        <h2>Movies in Marthandam</h2><br></br>
      <Box sx={{ width: '90%',  margin: '0 auto', padding: 2,  }}>
        {/* responsive card */}
        <Grid container spacing={2} justifyContent="center"
        style={{backgroundColor:"white",padding:"20px",}}>
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
  </Box>
    <br></br><h2>Upcoming Movies</h2>
    <br></br>
{/* card slider */}
    <Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%', padding:'50px' }}>
      <IconButton onClick={() => handleScroll('left')} aria-label="previous">
        <ArrowBack />
      </IconButton>
      <Box
        ref={sliderRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar
          },
        }}
      >
        {cardsData.map((card, index) => (
          <Card key={index} sx={{ minWidth: 300, margin: 1 }}>
            <CardMedia component="img" height="360" image={card.image} alt={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.black">
                {card.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {card.additionalDescription}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <IconButton onClick={() => handleScroll('right')} aria-label="next">
        <ArrowForward />
      </IconButton>
    </Box>
  </div>
  
        )    
      
}




export default Home;