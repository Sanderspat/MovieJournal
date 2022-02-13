import {Navbar, Container, Nav,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import MoviePage from './components/MoviePage';
import axios from 'axios';

function App() {
    return (
        <div class="container">
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/moviepage" element={<MoviePage/>}/>
            </Routes>
        </Router>
        </div>
    );
  }
  

  export default App;