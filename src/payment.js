import { Button } from '@mui/material';
import { styled} from '@mui/system';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ResponsiveButton = styled(Button)(({ theme }) => ({
    width: 'auto', 
    fontWeight: 'bold',
    padding: theme.spacing(2), 
    [theme.breakpoints.up('sm')]: {
      width: 'auto', 
    },
  }));
  
const Payment = () => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 }; // Default value if no state
  const taxRate = 47.2;
  const total=totalPrice+taxRate;
 

  const navigate = useNavigate();
  const addFunction = () => {
    navigate('/amount',{ state: { total } });
   }; 
  return (
      <div className='pay'>
        <br></br><br></br>
        <h2>Booking Summary</h2><br></br>
        <h5>Tickets: ${totalPrice.toFixed(2)}</h5><br></br>
        <h5>Taxes & Fees: ${taxRate}</h5><br></br>
        <div className='subpay'>
        <h3>Total: ${total.toFixed(2)}</h3><br></br>
        <ResponsiveButton variant="contained" color="primary" onClick={addFunction}>
      Proceed to Pay 
   </ResponsiveButton>
   </div>
      </div>
    
  );
};

export default Payment;

