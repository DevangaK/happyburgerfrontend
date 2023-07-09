import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

var burgerPrice;

export default function Cart() {

    const paperStyle={padding:'50px 20px', width:'600px', margin:'20px auto'}
    const[Quantity, setQuantity ]=React.useState('')
    const[customerName, setCustomerName]=React.useState('')
    const[burgerName, setBurgerName]=React.useState('')
    const[burgerId, setBurgerId]=React.useState('')
    const[ContactNumber, setContactNumber]=React.useState('')
    const[Address, setAddress]=React.useState('')
    const[totalPrice, setTotalPrice]=React.useState('')


    useEffect(() => {
      const burgerId = localStorage.getItem('burgerId');
      const burgerName = localStorage.getItem('burgerName');
      const totalPrice = localStorage.getItem('totalPrice');
      setBurgerName(burgerName)
      setTotalPrice(totalPrice)
      setBurgerId(burgerId)
  
    }, []);

    //insert customer details
    const handleClick=(e)=>{
        e.preventDefault()

        const array = {
          'burger_id': burgerId,
          'quantity': Quantity,
          'total_price': totalPrice,
          'customer_name': customerName,
          'customer_contact_number': ContactNumber,
          'customer_address': Address
        };


        // const cart= {burgerId,Address,ContactNumber,customerName,Quantity, totalPrice }

        console.log(JSON.stringify(array))
        console.log(array)

        fetch("http://localhost:9191/addCart",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        //convert JS object to jason string
        
        body:JSON.stringify(array)
    }).then(()=>{
        // once order confermed successfully display this message
        alert("Order Confirmed...")
        console.log("Order Confirmed...")
    })
    }
  return (
    
    <Container>

        <Paper elevation={3} style={paperStyle}>
            <h1 >Happy Burger Cart</h1>
            <h1 >.................................</h1>
            <h4 align="left">ORDER DETAILS</h4>

            <h4>Burger Name : {burgerName}</h4>
            <h4>Total Price : RS. {totalPrice}</h4>

    <h4 align="left">CUSTOMER DETAILS</h4>

    <Box
      component="form"
        sx={{
        '& > :not(style)': { m: 1, width: 500, maxWidth: '100%'},
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Quantity" variant="standard" 
      value={Quantity}
      onChange={(e)=>setQuantity(e.target.value)}
      />
      <TextField id="standard-basic" label="Customer Name" variant="standard" 
      value={customerName}
      onChange={(e)=>setCustomerName(e.target.value)}
      />
      <TextField id="standard-basic" label="Customer Contact Number" variant="standard" 
      value={ContactNumber}
      onChange={(e)=>setContactNumber(e.target.value)}
      />
      <TextField id="standard-basic" label="Customer Address" variant="standard" 
      value={Address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="success" onClick={handleClick}>
      Confirm Order
      </Button>
    </Box>
    
    </Paper>
    </Container>
  );
}
