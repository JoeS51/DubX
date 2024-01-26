import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> DubX </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/login"><Button variant="contained" > Login </Button></Link>
      </header>
    </div>
  );
}

export default App;
