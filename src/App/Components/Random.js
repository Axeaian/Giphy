import React from 'react';
import './Random.css';
import PropTypes from 'prop-types';

const Random = ({ gif, newRand }) => {
    return (
        <div>
            <div className="rand">
                < img src={gif.images.original.url} alt="" onClick={newRand} />
                <h6>~{gif.title}</h6>
            </div>
        </div>
    );
}

export default Random;

Random.propTypes = {
    gif: PropTypes.object.isRequired,
    newRand: PropTypes.func.isRequired
}