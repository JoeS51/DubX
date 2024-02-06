import './App.css';
import Class from './Components/ClassCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Grid from '@mui/material/Grid';

function Offers() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
                <Class></Class>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Class></Class>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Class></Class>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Class></Class>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Class></Class>
            </Grid>
        </Grid>
    </div>
  );
}

export default Offers;