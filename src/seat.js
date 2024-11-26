
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { styled} from '@mui/system';
import { useNavigate } from 'react-router-dom';
import "./App.css";
const ResponsiveButton = styled(Button)(({ theme }) => ({
    width: 'auto', 
    fontWeight: 'bold',
    padding: theme.spacing(2), 
    [theme.breakpoints.up('sm')]: {
      width: 'auto', 
    },
  }));

const rows = 6; // Number of rows
const seatsPerRow = 10; // Number of seats per row
const seatPrice = 150;

const Seat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  
  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat)); // Deselect seat
    } else {
      setSelectedSeats([...selectedSeats, seat]); // Select seat
    }
  };
  const navigate = useNavigate();
  const addFunction = () => {
    navigate('/payment',{ state: { totalPrice } });
   }; 

  const renderSeats = () => {
    let seatElements = [];
    for (let row = 0; row < rows; row++) {
      const seatRow = [];
      for (let seat = 0; seat < seatsPerRow; seat++) {
        const seatNumber = `${String.fromCharCode(65 + row)}${seat + 1}`; // E.g., A1, A2
        const isSelected = selectedSeats.includes(seatNumber);
        seatRow.push(
          <ResponsiveButton  
            key={seatNumber}
            onClick={() => handleSeatClick(seatNumber)}
            style={{
              margin: '5px',
              backgroundColor: isSelected ? 'skyblue' : 'white',
              color: 'blue',
              border: '2px solid skyblue', 
              borderRadius: '5px',
              padding: '10px',
              
            }}
          >
            {seatNumber}
          </ResponsiveButton>
        );
      }
      seatElements.push(<div key={row}>{seatRow}</div>);
    }
    return seatElements;
  };
  const totalPrice = selectedSeats.length * seatPrice;
  
  return (

<div className='seat'>
<br></br><br></br>
<h2>Select Your Seats</h2>
      <div className='bl'>{renderSeats()}</div>
      <h3>Selected Seats:</h3>
      {selectedSeats.length > 0 ? (
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={index}>{seat}</li>
          ))}
        </ul>
      ) : (
        <p>No seats selected</p>
      )}
      <h3>Total Price: ${totalPrice} </h3>
      <ResponsiveButton variant="contained" color="primary" onClick={addFunction}>
      Book Tickets
      
    </ResponsiveButton>
    </div>
  );
};

export default Seat;

