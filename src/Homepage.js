import React from 'react';
import './Homepage.css';
import Navigation from './Navigation';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="hero-image">
            <Navigation />
            <div className="hero-text">
                <h1>React Gif-tionary</h1>
                <p>This React app returns crowdsourced results from Urban Dictionary and Giphy</p>
                <Link to="/app"><Button color="success">Start Searching...</Button></Link>
            </div>
        </div>
    );
}

export default HomePage;
