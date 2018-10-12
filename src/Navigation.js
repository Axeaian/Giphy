import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className="logo"><Link to="/">Gif-tionary</Link></div>
            {/* <a href="https://github.com/Axeaian/Giphy">Github</a> */}
        </nav>
    );
}

export default Navigation;
