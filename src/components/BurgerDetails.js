import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from "react-router-dom";
import DummyBurgerData from './DummyBurgerData';



export default function BurgerDetails() {

  const [ingredients, setIngredients] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:8080/ingredients')
      .then(res => res.json())
      .then((result)=>{
        setIngredients(result);
      }
    ).catch((error) => {
      console.error('Error fetching ingredients:', error);
    });
  }, [])


  //checkboxes handling
  const [checked, setChecked] = React.useState([]); //array to store selected items

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  const burgerData = DummyBurgerData[0];

  //---------------------
  useEffect(() => {
    // Calculate the total price of the burger
    const ingredientPrices = checked.map((id) => {
      const ingredient = ingredients.find((item) => item.id === id);
      console.log('Ingredient:', ingredient);
      return ingredient.price;
    });
    const totalPrice = burgerData.price + ingredientPrices.reduce((a, b) => a + b, 0);
    setTotalPrice(totalPrice);
  }, [checked, ingredients, burgerData]);

  const handleAddToCart = () => {
    // store burger name and total price in local storage
    localStorage.setItem('burgerId', burgerData.id);
    localStorage.setItem('burgerName', burgerData.title);
    localStorage.setItem('totalPrice', totalPrice);
  };
  //--------------------


  return (
    <Grid
    sx={{
        display: 'flex',
        flexDirection: 'row',
        bgcolor: '#efebe9'
    }}
    >

    <Card
    sx={{
        width: '100%',
        maxWidth: 700,
        height:'auto',
        boxShadow: 0,
        borderRadius: 2,
        pb: 3,
        mx:3,
        my: 3,
        bgcolor: '#ffffff'
    }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height= "auto"
          image={burgerData.image}
          alt="Beef Burger"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" color="text.secondary" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            {burgerData.title}
          </Typography>
          <Typography variant="body1" color="text.secondary"  sx={{ textAlign: 'center', fontWeight: 'medium' }}>
            {burgerData.description}
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
            Rs. {burgerData.price}
          </Typography>
          <Button variant="outlined" color="success" startIcon={<StarIcon />} sx={{ mt: 5, color: '#33691e'}}>
            Add A Review
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
    

    <Container>
    
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      height:'auto',
      boxShadow: 0,
      borderRadius: 2,
      px: 3,
      py: 3,
      mx: 3,
      my: 3,
      bgcolor: '#ffffff'
      }}
    >
    
    {ingredients.map(ingredient=>(
    <ListItem  key={ingredient.id}>

      <ListItemIcon>
        <Checkbox
          color="success"
          edge="end"
          value={ingredient.id}
          onClick={handleToggle(ingredient.id)}
        />
      </ListItemIcon>

      <ListItemText
        primary={
          <>
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              {ingredient.name}
            </Typography>
          </>
        }
        secondary={ingredient.description}
      />

      <ListItemText
        primary ={
          <>
            <Typography variant="h6" sx={{color: 'success.dark', fontWeight: 'bold', textAlign: 'right'}}>
              Rs.{ingredient.price}
            </Typography>
          </>
        }
      />
    </ListItem>
  
  ))
}

  <Link to="/order">

    <Button variant="contained" color="success" startIcon={<ShoppingCartIcon/>} sx={{ mt: 26.5, mb: 3, bgcolor: '#33691e'}} onClick={handleAddToCart}>
      Add To Cart
    </Button>

  </Link>

  </List>

  </Container>

  </Grid>
  );
}