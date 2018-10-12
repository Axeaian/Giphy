import React from 'react';
import './Random.css'

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
