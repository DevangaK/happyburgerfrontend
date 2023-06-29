import React, { useEffect, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function Ingredient () {

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


  /*const handleCheckboxChange = (event, ingredientId) => {
    if (event.target.checked) {
      setSelectedIngredients((prevSelected) => [...prevSelected, ingredientId]);
    } else {
      setSelectedIngredients((prevSelected) =>
        prevSelected.filter((id) => id !== ingredientId)
      );
    }
  };*/

  return (
    <Container>

      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        height:'auto',
        boxShadow: 1,
        borderRadius: 1,
        px: 3,
        py: 3,
        mx: 3,
        my: 3,
        bgcolor: '#fbfbfb'
    }}
      >

      {ingredients.map(ingredient=>(
        <ListItem  key={ingredient.id}>

                <ListItemIcon>
                <Checkbox
                  edge="start"
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
    </List>
     
    </Container>
  );
}

/*
<ListItemText
            primary={ingredient.name}
            secondary={ingredient.price}
            primaryTypographyProps={{ style: { textAlign: 'left' } }}
            secondaryTypographyProps={{ style: { textAlign: 'right' } }}
          />
          <ListItemText
            primary={ingredient.description}
            primaryTypographyProps={{ style: { textAlign: 'center' } }}
          />



return (
    <Container>

    {ingredients.map(ingredient=>(
    <List key={ingredient.id}>
        <ListItem>
          <ListItemText
            primary={ingredient.name}
            secondary={ingredient.description}
          />
        </ListItem>
    </List>
     ))
    }

    </Container>
  );
}


return (
    <Container>

      <List
      sx={{
        width: '100%',
        maxWidth: 500,
        height:'auto',
        boxShadow: 1,
        borderRadius: 1,
        pb: 2,
        mx:3,
        my: 3,
        bgcolor: '#fbfbfb'
    }}
      >

      {ingredients.map(ingredient=>(
        <ListItem  key={ingredient.id} alignItems="flex-start">

                <ListItemIcon>
                <Checkbox
                  edge="start"
                />
                </ListItemIcon>

          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                  {ingredient.name}
                  {ingredient.price}
                  </Typography>
                
              </React.Fragment> 
            }
            secondary={ingredient.description}
            ListItemTextProps = {ingredient.price}
          />
        </ListItem>
        ))
      }
    </List>
     
    </Container>
  );
}

return (
    <Container>

      <List
      sx={{
        width: '100%',
        maxWidth: 400,
        height:'auto',
        boxShadow: 1,
        borderRadius: 1,
        pb: 2,
        mx:3,
        my: 3,
        bgcolor: '#fbfbfb'
    }}
      >

      {ingredients.map(ingredient=>(
        <ListItem  key={ingredient.id}>

                <ListItemIcon>
                <Checkbox
                  edge="start"
                  component="span" 
                />
                </ListItemIcon>

          <ListItemText
            primary={
              <>
                <Typography variant="body1" component="span" align="left" sx={{ fontWeight: 'medium' }}>
                {ingredient.name}
                </Typography>
                
                <Typography edge="end" variant="body1" component="span" sx={{color: 'success.dark', fontWeight: 'bold', textAlign: 'right'}}>
                  Rs.{ingredient.price}
                </Typography>
              </> 
            }
            secondary={ingredient.description}
          />
        </ListItem>
        
        ))
      }
    </List>
     
    </Container>
  );
}

*/