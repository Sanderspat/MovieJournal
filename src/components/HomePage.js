import React from "react";
import {Card} from 'react-bootstrap';
import "./HomePage.css";

const HomePage = () => {
    return (
        <div>
            <center><h1 className='letter_title'> Movie Journal </h1></center>
            <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <br/>
            <div className='text-center'>
            <button type="button" class="btn button_color btn-lg">User Login</button>
            <br/>
            <br/>
            <button type="button" class="btn button_color_two btn-lg">Create Account</button>
            </div>
            
            
           
        </div>
       
   

    );
};

export default HomePage;