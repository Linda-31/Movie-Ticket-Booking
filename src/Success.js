import React from 'react';

const Success = () => {
  return (
    
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor:"lightblue",  position:'relative',
      top:'150px'}}>
      <h1 className='success'>Payment Successful!</h1>
      <p className='suc'>Thank you for your payment.</p>
      
      <a className='re' href="/Home">Go back to Home</a>
    </div>
    
  );
};

export default Success;
