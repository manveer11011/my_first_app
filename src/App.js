import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
<Avatar alt="Remy Sharp" 
    sx={{ width: 65, height: 65, left: 650 }}
    
/>
  
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email or Username" variant="outlined" />
     
    </Box>
   
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      
    </Box>

    
    <Stack spacing={2} direction="row">
      <Button variant="contained">Login</Button>
    </Stack>
     

 
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
       
     
    
      <Typography component="legend">Rating</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  
  
    




    

    </div>
  );
}

export default App;
