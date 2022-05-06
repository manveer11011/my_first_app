import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="filled-basic" label="Password" variant="filled" />
      <Button variant="contained">Login button</Button>
    </Box>
        
      </header>
    </div>
  );
}

export default App;
