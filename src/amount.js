import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled} from '@mui/system';
import StripeCheckout from "react-stripe-checkout"
const ResponsiveButton = styled(Button)(({ theme }) => ({
    width: 'auto', 
    fontWeight: 'bold',
    padding: theme.spacing(2), 
    [theme.breakpoints.up('sm')]: {
      width: 'auto', 
    },
  }));
 

function Amount(){
    const location = useLocation();
    const { total } = location.state || { total: 0 }; 

        const [selectedOption, setSelectedOption] = useState('');
      
        const handleOptionChange = (e) => {
          setSelectedOption(e.target.value);
        };
      
       
        const onToken = (token)=>{
          console.log(token);
         
        }
      

        const navigate = useNavigate();
        const addFunction = () => {
          navigate('/Success');
         }; 
    
    return (
        <div className='amount'> <br></br>
        <h2 className='head'>Payment</h2>
        <h2 className='subpay' >Select an option to pay ${total.toFixed(2)} </h2>
      <form className='option'>
        <div >
          <label>
            <input
              type="radio"
              value="UPI"
              checked={selectedOption === 'UPI'}
              
              onChange={handleOptionChange}
            />
            
            UPI
          </label>
        </div>

        
        <div>
          <label>
            <input
              type="radio"
              value="Net Banking"
              checked={selectedOption === 'Net Banking'}
              onChange={handleOptionChange}
            />
            Net Banking
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Prepaid, Debit and Credit Cards"
              checked={selectedOption === 'Prepaid, Debit and Credit Cards'}
              onChange={handleOptionChange}
            />
            Prepaid, Debit and Credit Cards
          </label>
         
        </div>
        <div>
        <label>
            <input
              type="radio"
              value="Pay with card"
              checked={selectedOption === 'Pay with card'}
              onChange={handleOptionChange}
            />
           Pay with card
          </label>
          </div>
        <StripeCheckout 
        name='Book Tickets' 
        amount= {total*100}
        token={onToken}
        stripeKey="pk_test_51QDOQMEJjow2uAPKioatoIZwZjZ96BsTQqxFAK0CYzujCXojVDAKJDxneRl9Ix1d0LWetkpRgYUrT364XfcoM0dz00Ks4PujG6"
        currency='INR'>
        <ResponsiveButton  variant="contained" color="primary" role="link" className='btl' onClick={addFunction}>
         Proceed 
        </ResponsiveButton>
   
   </StripeCheckout>
      </form>
      
        </div>
          
    )
}
export default Amount;








