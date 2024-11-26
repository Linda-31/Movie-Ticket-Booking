import "./App.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./component/navbar";
import Home from "./Home";
import Movie from "./movie";
import Contact from "./contact";
import Notfound from "./Not_found";
import Theatres from "./Theatres";
import Booking from "./booking";
import Seat from "./seat";
import Payment from "./payment";
import Amount from "./amount";
import Success from './Success';


function App(){
 return(
  <Router>
    <Navbar />
    <div className="App">
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/movie" element={<Movie/>}></Route>
      <Route path="/Theatres" element={<Theatres/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
      <Route path="/seat" element={<Seat/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="/amount" element={<Amount/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
    </Routes>
    </div>
  </Router>
  
);
}

 
   


 
export default App;

