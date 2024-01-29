import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import Navbar from './Components/Navbar';

function Login() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <h1> Login </h1>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <br></br>
        <br></br>
        <br></br>
        <Link to="/"><Button variant="contained" > Home </Button></Link>
    </div>
  );
}

export default Login;