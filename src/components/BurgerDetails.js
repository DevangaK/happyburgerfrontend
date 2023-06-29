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
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';



export default function BurgerDetails() {

  const [ingredients, setIngredients] = useState([])
  //const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:8080/ingredients')
      .then(res => res.json())
      .then((result)=>{
        setIngredients(result);
      }
    )
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
          image="beef burger.jpg"
          alt="Beef Burger"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" color="text.secondary" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            Beef Burger
          </Typography>
          <Typography variant="body1" color="text.secondary"  sx={{ textAlign: 'center', fontWeight: 'medium' }}>
            Flame-grilled beef patties with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
            Rs. 1500
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

    <ListItemButton role={undefined} onClick={handleToggle()} dense>
      <ListItemIcon>
        <Checkbox
          color="success"
          edge="end"
        />
      </ListItemIcon>
    </ListItemButton>

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

<Button variant="contained" color="success" startIcon={<ShoppingCartIcon/>} sx={{ mt: 26.5, mb: 3, bgcolor: '#33691e'}}>
  Add To Cart
</Button>

</List>

</Container>

  </Grid>
  );
}