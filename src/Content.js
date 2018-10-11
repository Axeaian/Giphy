import React from 'react';
import './Content.css';
import Dictionary from './Dictionary'
import Random from './Random';

const Content = ({ rand, newRand, udDef }) => {

    return (
        <div className="wrapper">
            <div className="cont">
                <h4>Urban Dictionary</h4>
                <p className="comment">because other dictionaries are too mainstream</p>
                <Dictionary udDef={udDef} />

            </div>
            <div className="cont">
                <h4>Giphy</h4>
                <p className="comment">A picture speaks a thousand words. What about moving picture?</p>
                <Random gif={rand} newRand={newRand} />
            </div>
        </div>
    );
}

export default Content;
